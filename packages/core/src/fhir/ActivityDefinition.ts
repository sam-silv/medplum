/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { Age } from './Age';
import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { Dosage } from './Dosage';
import { Duration } from './Duration';
import { Expression } from './Expression';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Reference } from './Reference';
import { RelatedArtifact } from './RelatedArtifact';
import { Resource } from './Resource';
import { Timing } from './Timing';
import { UsageContext } from './UsageContext';

/**
 * This resource allows for the definition of some activity to be
 * performed, independent of a particular patient, practitioner, or other
 * performance context.
 */
export interface ActivityDefinition {

  /**
   * This is a ActivityDefinition resource
   */
  readonly resourceType: 'ActivityDefinition';

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
   * An absolute URI that is used to identify this activity definition when
   * it is referenced in a specification, model, design or an instance;
   * also called its canonical identifier. This SHOULD be globally unique
   * and SHOULD be a literal address at which at which an authoritative
   * instance of this activity definition is (or will be) published. This
   * URL can be the target of a canonical reference. It SHALL remain the
   * same when the activity definition is stored on different servers.
   */
  readonly url?: string;

  /**
   * A formal identifier that is used to identify this activity definition
   * when it is represented in other formats, or referenced in a
   * specification, model, design or an instance.
   */
  readonly identifier?: Identifier[];

  /**
   * The identifier that is used to identify this version of the activity
   * definition when it is referenced in a specification, model, design or
   * instance. This is an arbitrary value managed by the activity
   * definition author and is not expected to be globally unique. For
   * example, it might be a timestamp (e.g. yyyymmdd) if a managed version
   * is not available. There is also no expectation that versions can be
   * placed in a lexicographical sequence. To provide a version consistent
   * with the Decision Support Service specification, use the format
   * Major.Minor.Revision (e.g. 1.0.0). For more information on versioning
   * knowledge assets, refer to the Decision Support Service specification.
   * Note that a version is required for non-experimental active assets.
   */
  readonly version?: string;

  /**
   * A natural language name identifying the activity definition. This name
   * should be usable as an identifier for the module by machine processing
   * applications such as code generation.
   */
  readonly name?: string;

  /**
   * A short, descriptive, user-friendly title for the activity definition.
   */
  readonly title?: string;

  /**
   * An explanatory or alternate title for the activity definition giving
   * additional information about its content.
   */
  readonly subtitle?: string;

  /**
   * The status of this activity definition. Enables tracking the
   * life-cycle of the content.
   */
  readonly status?: string;

  /**
   * A Boolean value to indicate that this activity definition is authored
   * for testing purposes (or education/evaluation/marketing) and is not
   * intended to be used for genuine usage.
   */
  readonly experimental?: boolean;

  /**
   * A code or group definition that describes the intended subject of the
   * activity being defined.
   */
  readonly subjectCodeableConcept?: CodeableConcept;

  /**
   * A code or group definition that describes the intended subject of the
   * activity being defined.
   */
  readonly subjectReference?: Reference;

  /**
   * The date  (and optionally time) when the activity definition was
   * published. The date must change when the business version changes and
   * it must change if the status code changes. In addition, it should
   * change when the substantive content of the activity definition
   * changes.
   */
  readonly date?: Date;

  /**
   * The name of the organization or individual that published the activity
   * definition.
   */
  readonly publisher?: string;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  readonly contact?: ContactDetail[];

  /**
   * A free text natural language description of the activity definition
   * from a consumer's perspective.
   */
  readonly description?: string;

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These contexts may be general categories
   * (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with
   * indexing and searching for appropriate activity definition instances.
   */
  readonly useContext?: UsageContext[];

  /**
   * A legal or geographic region in which the activity definition is
   * intended to be used.
   */
  readonly jurisdiction?: CodeableConcept[];

  /**
   * Explanation of why this activity definition is needed and why it has
   * been designed as it has.
   */
  readonly purpose?: string;

  /**
   * A detailed description of how the activity definition is used from a
   * clinical perspective.
   */
  readonly usage?: string;

  /**
   * A copyright statement relating to the activity definition and/or its
   * contents. Copyright statements are generally legal restrictions on the
   * use and publishing of the activity definition.
   */
  readonly copyright?: string;

  /**
   * The date on which the resource content was approved by the publisher.
   * Approval happens once when the content is officially approved for
   * usage.
   */
  readonly approvalDate?: Date;

  /**
   * The date on which the resource content was last reviewed. Review
   * happens periodically after approval but does not change the original
   * approval date.
   */
  readonly lastReviewDate?: Date;

  /**
   * The period during which the activity definition content was or is
   * planned to be in active use.
   */
  readonly effectivePeriod?: Period;

  /**
   * Descriptive topics related to the content of the activity. Topics
   * provide a high-level categorization of the activity that can be useful
   * for filtering and searching.
   */
  readonly topic?: CodeableConcept[];

  /**
   * An individiual or organization primarily involved in the creation and
   * maintenance of the content.
   */
  readonly author?: ContactDetail[];

  /**
   * An individual or organization primarily responsible for internal
   * coherence of the content.
   */
  readonly editor?: ContactDetail[];

  /**
   * An individual or organization primarily responsible for review of some
   * aspect of the content.
   */
  readonly reviewer?: ContactDetail[];

  /**
   * An individual or organization responsible for officially endorsing the
   * content for use in some setting.
   */
  readonly endorser?: ContactDetail[];

  /**
   * Related artifacts such as additional documentation, justification, or
   * bibliographic references.
   */
  readonly relatedArtifact?: RelatedArtifact[];

  /**
   * A reference to a Library resource containing any formal logic used by
   * the activity definition.
   */
  readonly library?: string[];

  /**
   * A description of the kind of resource the activity definition is
   * representing. For example, a MedicationRequest, a ServiceRequest, or a
   * CommunicationRequest. Typically, but not always, this is a Request
   * resource.
   */
  readonly kind?: string;

  /**
   * A profile to which the target of the activity definition is expected
   * to conform.
   */
  readonly profile?: string;

  /**
   * Detailed description of the type of activity; e.g. What lab test, what
   * procedure, what kind of encounter.
   */
  readonly code?: CodeableConcept;

  /**
   * Indicates the level of authority/intentionality associated with the
   * activity and where the request should fit into the workflow chain.
   */
  readonly intent?: string;

  /**
   * Indicates how quickly the activity  should be addressed with respect
   * to other requests.
   */
  readonly priority?: string;

  /**
   * Set this to true if the definition is to indicate that a particular
   * activity should NOT be performed. If true, this element should be
   * interpreted to reinforce a negative coding. For example NPO as a code
   * with a doNotPerform of true would still indicate to NOT perform the
   * action.
   */
  readonly doNotPerform?: boolean;

  /**
   * The period, timing or frequency upon which the described activity is
   * to occur.
   */
  readonly timingTiming?: Timing;

  /**
   * The period, timing or frequency upon which the described activity is
   * to occur.
   */
  readonly timingDateTime?: string;

  /**
   * The period, timing or frequency upon which the described activity is
   * to occur.
   */
  readonly timingAge?: Age;

  /**
   * The period, timing or frequency upon which the described activity is
   * to occur.
   */
  readonly timingPeriod?: Period;

  /**
   * The period, timing or frequency upon which the described activity is
   * to occur.
   */
  readonly timingRange?: Range;

  /**
   * The period, timing or frequency upon which the described activity is
   * to occur.
   */
  readonly timingDuration?: Duration;

  /**
   * Identifies the facility where the activity will occur; e.g. home,
   * hospital, specific clinic, etc.
   */
  readonly location?: Reference;

  /**
   * Indicates who should participate in performing the action described.
   */
  readonly participant?: ActivityDefinitionParticipant[];

  /**
   * Identifies the food, drug or other product being consumed or supplied
   * in the activity.
   */
  readonly productReference?: Reference;

  /**
   * Identifies the food, drug or other product being consumed or supplied
   * in the activity.
   */
  readonly productCodeableConcept?: CodeableConcept;

  /**
   * Identifies the quantity expected to be consumed at once (per dose, per
   * meal, etc.).
   */
  readonly quantity?: Quantity;

  /**
   * Provides detailed dosage instructions in the same way that they are
   * described for MedicationRequest resources.
   */
  readonly dosage?: Dosage[];

  /**
   * Indicates the sites on the subject's body where the procedure should
   * be performed (I.e. the target sites).
   */
  readonly bodySite?: CodeableConcept[];

  /**
   * Defines specimen requirements for the action to be performed, such as
   * required specimens for a lab test.
   */
  readonly specimenRequirement?: Reference[];

  /**
   * Defines observation requirements for the action to be performed, such
   * as body weight or surface area.
   */
  readonly observationRequirement?: Reference[];

  /**
   * Defines the observations that are expected to be produced by the
   * action.
   */
  readonly observationResultRequirement?: Reference[];

  /**
   * A reference to a StructureMap resource that defines a transform that
   * can be executed to produce the intent resource using the
   * ActivityDefinition instance as the input.
   */
  readonly transform?: string;

  /**
   * Dynamic values that will be evaluated to produce values for elements
   * of the resulting resource. For example, if the dosage of a medication
   * must be computed based on the patient's weight, a dynamic value would
   * be used to specify an expression that calculated the weight, and the
   * path on the request resource that would contain the result.
   */
  readonly dynamicValue?: ActivityDefinitionDynamicValue[];
}

/**
 * This resource allows for the definition of some activity to be
 * performed, independent of a particular patient, practitioner, or other
 * performance context.
 */
export interface ActivityDefinitionDynamicValue {

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
   * The path to the element to be customized. This is the path on the
   * resource that will hold the result of the calculation defined by the
   * expression. The specified path SHALL be a FHIRPath resolveable on the
   * specified target type of the ActivityDefinition, and SHALL consist
   * only of identifiers, constant indexers, and a restricted subset of
   * functions. The path is allowed to contain qualifiers (.) to traverse
   * sub-elements, as well as indexers ([x]) to traverse
   * multiple-cardinality sub-elements (see the [Simple FHIRPath
   * Profile](fhirpath.html#simple) for full details).
   */
  readonly path?: string;

  /**
   * An expression specifying the value of the customized element.
   */
  readonly expression?: Expression;
}

/**
 * This resource allows for the definition of some activity to be
 * performed, independent of a particular patient, practitioner, or other
 * performance context.
 */
export interface ActivityDefinitionParticipant {

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
   * The type of participant in the action.
   */
  readonly type?: string;

  /**
   * The role the participant should play in performing the described
   * action.
   */
  readonly role?: CodeableConcept;
}
