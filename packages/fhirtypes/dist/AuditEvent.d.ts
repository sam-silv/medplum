/*
 * This is a generated file
 * Do not edit manually.
 */

import { Bot } from './Bot';
import { ClientApplication } from './ClientApplication';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { Device } from './Device';
import { Extension } from './Extension';
import { Location } from './Location';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { Patient } from './Patient';
import { Period } from './Period';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';
import { Resource } from './Resource';
import { Subscription } from './Subscription';

/**
 * A record of an event made for purposes of maintaining a security log.
 * Typical uses include detection of intrusion attempts and monitoring
 * for inappropriate usage.
 */
export interface AuditEvent {

  /**
   * This is a AuditEvent resource
   */
  readonly resourceType: 'AuditEvent';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Identifier for a family of the event.  For example, a menu item,
   * program, rule, policy, function code, application name or URL. It
   * identifies the performed function.
   */
  type: Coding;

  /**
   * Identifier for the category of event.
   */
  subtype?: Coding[];

  /**
   * Indicator for type of action performed during the event that generated
   * the audit.
   */
  action?: 'C' | 'R' | 'U' | 'D' | 'E';

  /**
   * The period during which the activity occurred.
   */
  period?: Period;

  /**
   * The time when the event was recorded.
   */
  recorded: string;

  /**
   * Indicates whether the event succeeded or failed.
   */
  outcome?: '0' | '4' | '8' | '12';

  /**
   * A free text description of the outcome of the event.
   */
  outcomeDesc?: string;

  /**
   * The purposeOfUse (reason) that was used during the event being
   * recorded.
   */
  purposeOfEvent?: CodeableConcept[];

  /**
   * An actor taking an active role in the event or activity that is
   * logged.
   */
  agent: AuditEventAgent[];

  /**
   * The system that is reporting the event.
   */
  source: AuditEventSource;

  /**
   * Specific instances of data or objects that have been accessed.
   */
  entity?: AuditEventEntity[];
}

/**
 * An actor taking an active role in the event or activity that is
 * logged.
 */
export interface AuditEventAgent {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Specification of the participation type the user plays when performing
   * the event.
   */
  type?: CodeableConcept;

  /**
   * The security role that the user was acting under, that come from local
   * codes defined by the access control security system (e.g. RBAC, ABAC)
   * used in the local context.
   */
  role?: CodeableConcept[];

  /**
   * Reference to who this agent is that was involved in the event.
   */
  who?: Reference<PractitionerRole | Practitioner | Organization | Device | Patient | RelatedPerson>;

  /**
   * Alternative agent Identifier. For a human, this should be a user
   * identifier text string from authentication system. This identifier
   * would be one known to a common authentication system (e.g. single
   * sign-on), if available.
   */
  altId?: string;

  /**
   * Human-meaningful name for the agent.
   */
  name?: string;

  /**
   * Indicator that the user is or is not the requestor, or initiator, for
   * the event being audited.
   */
  requestor: boolean;

  /**
   * Where the event occurred.
   */
  location?: Reference<Location>;

  /**
   * The policy or plan that authorized the activity being recorded.
   * Typically, a single activity may have multiple applicable policies,
   * such as patient consent, guarantor funding, etc. The policy would also
   * indicate the security token used.
   */
  policy?: string[];

  /**
   * Type of media involved. Used when the event is about
   * exporting/importing onto media.
   */
  media?: Coding;

  /**
   * Logical network location for application activity, if the activity has
   * a network location.
   */
  network?: AuditEventAgentNetwork;

  /**
   * The reason (purpose of use), specific to this agent, that was used
   * during the event being recorded.
   */
  purposeOfUse?: CodeableConcept[];
}

/**
 * Logical network location for application activity, if the activity has
 * a network location.
 */
export interface AuditEventAgentNetwork {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * An identifier for the network access point of the user device for the
   * audit event.
   */
  address?: string;

  /**
   * An identifier for the type of network access point that originated the
   * audit event.
   */
  type?: '1' | '2' | '3' | '4' | '5';
}

/**
 * Specific instances of data or objects that have been accessed.
 */
export interface AuditEventEntity {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Identifies a specific instance of the entity. The reference should be
   * version specific.
   */
  what?: Reference<Resource>;

  /**
   * The type of the object that was involved in this audit event.
   */
  type?: Coding;

  /**
   * Code representing the role the entity played in the event being
   * audited.
   */
  role?: Coding;

  /**
   * Identifier for the data life-cycle stage for the entity.
   */
  lifecycle?: Coding;

  /**
   * Security labels for the identified entity.
   */
  securityLabel?: Coding[];

  /**
   * A name of the entity in the audit event.
   */
  name?: string;

  /**
   * Text that describes the entity in more detail.
   */
  description?: string;

  /**
   * The query parameters for a query-type entities.
   */
  query?: string;

  /**
   * Tagged value pairs for conveying additional information about the
   * entity.
   */
  detail?: AuditEventEntityDetail[];
}

/**
 * Tagged value pairs for conveying additional information about the
 * entity.
 */
export interface AuditEventEntityDetail {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The type of extra detail provided in the value.
   */
  type: string;

  /**
   * The  value of the extra detail.
   */
  valueString?: string;

  /**
   * The  value of the extra detail.
   */
  valueBase64Binary?: string;
}

/**
 * The  value of the extra detail.
 */
export type AuditEventEntityDetailValue = string;

/**
 * The system that is reporting the event.
 */
export interface AuditEventSource {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Logical source location within the healthcare enterprise network.  For
   * example, a hospital or other provider location within a multi-entity
   * provider group.
   */
  site?: string;

  /**
   * Identifier of the source where the event was detected.
   */
  observer: Reference<PractitionerRole | Practitioner | Organization | Device | Patient | RelatedPerson | Subscription | Bot | ClientApplication>;

  /**
   * Code specifying the type of source where event originated.
   */
  type?: Coding[];
}
