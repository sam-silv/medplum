/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Money } from './Money';
import { Narrative } from './Narrative';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * Financial instrument which may be used to reimburse or pay for health
 * care products and services. Includes both insurance and self-payment.
 */
export interface Coverage {

  /**
   * This is a Coverage resource
   */
  readonly resourceType: 'Coverage';

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
   * A unique identifier assigned to this coverage.
   */
  readonly identifier?: Identifier[];

  /**
   * The status of the resource instance.
   */
  readonly status?: string;

  /**
   * The type of coverage: social program, medical plan, accident coverage
   * (workers compensation, auto), group health or payment by an individual
   * or organization.
   */
  readonly type?: CodeableConcept;

  /**
   * The party who 'owns' the insurance policy.
   */
  readonly policyHolder?: Reference;

  /**
   * The party who has signed-up for or 'owns' the contractual relationship
   * to the policy or to whom the benefit of the policy for services
   * rendered to them or their family is due.
   */
  readonly subscriber?: Reference;

  /**
   * The insurer assigned ID for the Subscriber.
   */
  readonly subscriberId?: string;

  /**
   * The party who benefits from the insurance coverage; the patient when
   * products and/or services are provided.
   */
  readonly beneficiary?: Reference;

  /**
   * A unique identifier for a dependent under the coverage.
   */
  readonly dependent?: string;

  /**
   * The relationship of beneficiary (patient) to the subscriber.
   */
  readonly relationship?: CodeableConcept;

  /**
   * Time period during which the coverage is in force. A missing start
   * date indicates the start date isn't known, a missing end date means
   * the coverage is continuing to be in force.
   */
  readonly period?: Period;

  /**
   * The program or plan underwriter or payor including both insurance and
   * non-insurance agreements, such as patient-pay agreements.
   */
  readonly payor?: Reference[];

  /**
   * A suite of underwriter specific classifiers.
   */
  readonly class?: CoverageClass[];

  /**
   * The order of applicability of this coverage relative to other
   * coverages which are currently in force. Note, there may be gaps in the
   * numbering and this does not imply primary, secondary etc. as the
   * specific positioning of coverages depends upon the episode of care.
   */
  readonly order?: number;

  /**
   * The insurer-specific identifier for the insurer-defined network of
   * providers to which the beneficiary may seek treatment which will be
   * covered at the 'in-network' rate, otherwise 'out of network' terms and
   * conditions apply.
   */
  readonly network?: string;

  /**
   * A suite of codes indicating the cost category and associated amount
   * which have been detailed in the policy and may have been  included on
   * the health card.
   */
  readonly costToBeneficiary?: CoverageCostToBeneficiary[];

  /**
   * When 'subrogation=true' this insurance instance has been included not
   * for adjudication but to provide insurers with the details to recover
   * costs.
   */
  readonly subrogation?: boolean;

  /**
   * The policy(s) which constitute this insurance coverage.
   */
  readonly contract?: Reference[];
}

/**
 * Financial instrument which may be used to reimburse or pay for health
 * care products and services. Includes both insurance and self-payment.
 */
export interface CoverageClass {

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
   * The type of classification for which an insurer-specific class label
   * or number and optional name is provided, for example may be used to
   * identify a class of coverage or employer group, Policy, Plan.
   */
  readonly type?: CodeableConcept;

  /**
   * The alphanumeric string value associated with the insurer issued
   * label.
   */
  readonly value?: string;

  /**
   * A short description for the class.
   */
  readonly name?: string;
}

/**
 * Financial instrument which may be used to reimburse or pay for health
 * care products and services. Includes both insurance and self-payment.
 */
export interface CoverageCostToBeneficiary {

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
   * The category of patient centric costs associated with treatment.
   */
  readonly type?: CodeableConcept;

  /**
   * The amount due from the patient for the cost category.
   */
  readonly valueQuantity?: Quantity;

  /**
   * The amount due from the patient for the cost category.
   */
  readonly valueMoney?: Money;

  /**
   * A suite of codes indicating exceptions or reductions to patient costs
   * and their effective periods.
   */
  readonly exception?: CoverageException[];
}

/**
 * Financial instrument which may be used to reimburse or pay for health
 * care products and services. Includes both insurance and self-payment.
 */
export interface CoverageException {

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
   * The code for the specific exception.
   */
  readonly type?: CodeableConcept;

  /**
   * The timeframe during when the exception is in force.
   */
  readonly period?: Period;
}
