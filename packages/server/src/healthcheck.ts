import { MEDPLUM_VERSION } from '@medplum/core';
import { Request, Response } from 'express';
import { getDatabasePool } from './database';
import { setGauge } from './otel/otel';
import { getRedis } from './redis';

export async function healthcheckHandler(_req: Request, res: Response): Promise<void> {
  setGauge('medplum.db.idleConnections', getDatabasePool().idleCount);
  setGauge('medplum.db.queriesAwaitingClient', getDatabasePool().waitingCount);

  let startTime = Date.now();
  const postgresOk = await testPostgres();
  const dbRoundtripMs = Date.now() - startTime;
  setGauge('medplum.db.healthcheckRTT', dbRoundtripMs / 1000);

  startTime = Date.now();
  const redisOk = await testRedis();
  const redisRoundtripMs = Date.now() - startTime;
  setGauge('medplum.redis.healthcheckRTT', redisRoundtripMs / 1000);

  res.json({
    ok: true,
    version: MEDPLUM_VERSION,
    platform: process.platform,
    runtime: process.version,
    postgres: postgresOk,
    redis: redisOk,
  });
}

async function testPostgres(): Promise<boolean> {
  return (await getDatabasePool().query(`SELECT 1 AS "status"`)).rows[0].status === 1;
}

async function testRedis(): Promise<boolean> {
  return (await getRedis().ping()) === 'PONG';
}
