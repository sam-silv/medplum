/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Reference } from './Reference';
import { Resource } from './Resource';
import { Timing } from './Timing';

/**
 * A record of a request for a medication, substance or device used in
 * the healthcare setting.
 */
export interface SupplyRequest {

  /**
   * This is a SupplyRequest resource
   */
  readonly resourceType: 'SupplyRequest';

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
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  readonly text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  readonly contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

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
  readonly modifierExtension?: Extension[];

  /**
   * Business identifiers assigned to this SupplyRequest by the author
   * and/or other systems. These identifiers remain constant as the
   * resource is updated and propagates from server to server.
   */
  readonly identifier?: Identifier[];

  /**
   * Status of the supply request.
   */
  readonly status?: string;

  /**
   * Category of supply, e.g.  central, non-stock, etc. This is used to
   * support work flows associated with the supply process.
   */
  readonly category?: CodeableConcept;

  /**
   * Indicates how quickly this SupplyRequest should be addressed with
   * respect to other requests.
   */
  readonly priority?: string;

  /**
   * The item that is requested to be supplied. This is either a link to a
   * resource representing the details of the item or a code that
   * identifies the item from a known list.
   */
  readonly itemCodeableConcept?: CodeableConcept;

  /**
   * The item that is requested to be supplied. This is either a link to a
   * resource representing the details of the item or a code that
   * identifies the item from a known list.
   */
  readonly itemReference?: Reference;

  /**
   * The amount that is being ordered of the indicated item.
   */
  readonly quantity?: Quantity;

  /**
   * Specific parameters for the ordered item.  For example, the size of
   * the indicated item.
   */
  readonly parameter?: SupplyRequestParameter[];

  /**
   * When the request should be fulfilled.
   */
  readonly occurrenceDateTime?: string;

  /**
   * When the request should be fulfilled.
   */
  readonly occurrencePeriod?: Period;

  /**
   * When the request should be fulfilled.
   */
  readonly occurrenceTiming?: Timing;

  /**
   * When the request was made.
   */
  readonly authoredOn?: Date;

  /**
   * The device, practitioner, etc. who initiated the request.
   */
  readonly requester?: Reference;

  /**
   * Who is intended to fulfill the request.
   */
  readonly supplier?: Reference[];

  /**
   * The reason why the supply item was requested.
   */
  readonly reasonCode?: CodeableConcept[];

  /**
   * The reason why the supply item was requested.
   */
  readonly reasonReference?: Reference[];

  /**
   * Where the supply is expected to come from.
   */
  readonly deliverFrom?: Reference;

  /**
   * Where the supply is destined to go.
   */
  readonly deliverTo?: Reference;
}

/**
 * A record of a request for a medication, substance or device used in
 * the healthcare setting.
 */
export interface SupplyRequestParameter {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

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
  readonly modifierExtension?: Extension[];

  /**
   * A code or string that identifies the device detail being asserted.
   */
  readonly code?: CodeableConcept;

  /**
   * The value of the device detail.
   */
  readonly valueCodeableConcept?: CodeableConcept;

  /**
   * The value of the device detail.
   */
  readonly valueQuantity?: Quantity;

  /**
   * The value of the device detail.
   */
  readonly valueRange?: Range;

  /**
   * The value of the device detail.
   */
  readonly valueBoolean?: boolean;
}
