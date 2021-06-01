/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { Meta } from './Meta';

/**
 * OAuth client application.
 */
export interface ClientApplication {

  /**
   * This is a ClientApplication resource
   */
  readonly resourceType: 'ClientApplication';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  readonly id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  readonly meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  readonly implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  readonly language?: string;

  /**
   * Client secret string used to verify the identity of a client.
   */
  readonly secret?: string;

  /**
   * Redirect URI used when redirecting a client back to the client
   * application.
   */
  readonly redirectUri?: string;
}
