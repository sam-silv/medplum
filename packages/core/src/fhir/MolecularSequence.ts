/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Quantity } from './Quantity';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * Raw data describing a biological sequence.
 */
export interface MolecularSequence {

  /**
   * This is a MolecularSequence resource
   */
  readonly resourceType: 'MolecularSequence';

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
   * A unique identifier for this particular sequence instance. This is a
   * FHIR-defined id.
   */
  readonly identifier?: Identifier[];

  /**
   * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
   */
  readonly type?: string;

  /**
   * Whether the sequence is numbered starting at 0 (0-based numbering or
   * coordinates, inclusive start, exclusive end) or starting at 1 (1-based
   * numbering, inclusive start and inclusive end).
   */
  readonly coordinateSystem?: number;

  /**
   * The patient whose sequencing results are described by this resource.
   */
  readonly patient?: Reference;

  /**
   * Specimen used for sequencing.
   */
  readonly specimen?: Reference;

  /**
   * The method for sequencing, for example, chip information.
   */
  readonly device?: Reference;

  /**
   * The organization or lab that should be responsible for this result.
   */
  readonly performer?: Reference;

  /**
   * The number of copies of the sequence of interest. (RNASeq).
   */
  readonly quantity?: Quantity;

  /**
   * A sequence that is used as a reference to describe variants that are
   * present in a sequence analyzed.
   */
  readonly referenceSeq?: MolecularSequenceReferenceSeq;

  /**
   * The definition of variant here originates from Sequence ontology
   * ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)).
   * This element can represent amino acid or nucleic sequence
   * change(including insertion,deletion,SNP,etc.)  It can represent some
   * complex mutation or segment variation with the assist of CIGAR string.
   */
  readonly variant?: MolecularSequenceVariant[];

  /**
   * Sequence that was observed. It is the result marked by referenceSeq
   * along with variant records on referenceSeq. This shall start from
   * referenceSeq.windowStart and end by referenceSeq.windowEnd.
   */
  readonly observedSeq?: string;

  /**
   * An experimental feature attribute that defines the quality of the
   * feature in a quantitative way, such as a phred quality score
   * ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
   */
  readonly quality?: MolecularSequenceQuality[];

  /**
   * Coverage (read depth or depth) is the average number of reads
   * representing a given nucleotide in the reconstructed sequence.
   */
  readonly readCoverage?: number;

  /**
   * Configurations of the external repository. The repository shall store
   * target's observedSeq or records related with target's observedSeq.
   */
  readonly repository?: MolecularSequenceRepository[];

  /**
   * Pointer to next atomic sequence which at most contains one variant.
   */
  readonly pointer?: Reference[];

  /**
   * Information about chromosome structure variation.
   */
  readonly structureVariant?: MolecularSequenceStructureVariant[];
}

/**
 * Raw data describing a biological sequence.
 */
export interface MolecularSequenceInner {

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
   * Structural variant inner start. If the coordinate system is either
   * 0-based or 1-based, then start position is inclusive.
   */
  readonly start?: number;

  /**
   * Structural variant inner end. If the coordinate system is 0-based then
   * end is exclusive and does not include the last position. If the
   * coordinate system is 1-base, then end is inclusive and includes the
   * last position.
   */
  readonly end?: number;
}

/**
 * Raw data describing a biological sequence.
 */
export interface MolecularSequenceOuter {

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
   * Structural variant outer start. If the coordinate system is either
   * 0-based or 1-based, then start position is inclusive.
   */
  readonly start?: number;

  /**
   * Structural variant outer end. If the coordinate system is 0-based then
   * end is exclusive and does not include the last position. If the
   * coordinate system is 1-base, then end is inclusive and includes the
   * last position.
   */
  readonly end?: number;
}

/**
 * Raw data describing a biological sequence.
 */
export interface MolecularSequenceQuality {

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
   * INDEL / SNP / Undefined variant.
   */
  readonly type?: string;

  /**
   * Gold standard sequence used for comparing against.
   */
  readonly standardSequence?: CodeableConcept;

  /**
   * Start position of the sequence. If the coordinate system is either
   * 0-based or 1-based, then start position is inclusive.
   */
  readonly start?: number;

  /**
   * End position of the sequence. If the coordinate system is 0-based then
   * end is exclusive and does not include the last position. If the
   * coordinate system is 1-base, then end is inclusive and includes the
   * last position.
   */
  readonly end?: number;

  /**
   * The score of an experimentally derived feature such as a p-value
   * ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)).
   */
  readonly score?: Quantity;

  /**
   * Which method is used to get sequence quality.
   */
  readonly method?: CodeableConcept;

  /**
   * True positives, from the perspective of the truth data, i.e. the
   * number of sites in the Truth Call Set for which there are paths
   * through the Query Call Set that are consistent with all of the alleles
   * at this site, and for which there is an accurate genotype call for the
   * event.
   */
  readonly truthTP?: number;

  /**
   * True positives, from the perspective of the query data, i.e. the
   * number of sites in the Query Call Set for which there are paths
   * through the Truth Call Set that are consistent with all of the alleles
   * at this site, and for which there is an accurate genotype call for the
   * event.
   */
  readonly queryTP?: number;

  /**
   * False negatives, i.e. the number of sites in the Truth Call Set for
   * which there is no path through the Query Call Set that is consistent
   * with all of the alleles at this site, or sites for which there is an
   * inaccurate genotype call for the event. Sites with correct variant but
   * incorrect genotype are counted here.
   */
  readonly truthFN?: number;

  /**
   * False positives, i.e. the number of sites in the Query Call Set for
   * which there is no path through the Truth Call Set that is consistent
   * with this site. Sites with correct variant but incorrect genotype are
   * counted here.
   */
  readonly queryFP?: number;

  /**
   * The number of false positives where the non-REF alleles in the Truth
   * and Query Call Sets match (i.e. cases where the truth is 1/1 and the
   * query is 0/1 or similar).
   */
  readonly gtFP?: number;

  /**
   * QUERY.TP / (QUERY.TP + QUERY.FP).
   */
  readonly precision?: number;

  /**
   * TRUTH.TP / (TRUTH.TP + TRUTH.FN).
   */
  readonly recall?: number;

  /**
   * Harmonic mean of Recall and Precision, computed as: 2 * precision *
   * recall / (precision + recall).
   */
  readonly fScore?: number;

  /**
   * Receiver Operator Characteristic (ROC) Curve  to give
   * sensitivity/specificity tradeoff.
   */
  readonly roc?: MolecularSequenceRoc;
}

/**
 * Raw data describing a biological sequence.
 */
export interface MolecularSequenceReferenceSeq {

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
   * Structural unit composed of a nucleic acid molecule which controls its
   * own replication through the interaction of specific proteins at one or
   * more origins of replication
   * ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).
   */
  readonly chromosome?: CodeableConcept;

  /**
   * The Genome Build used for reference, following GRCh build versions
   * e.g. 'GRCh 37'.  Version number must be included if a versioned
   * release of a primary build was used.
   */
  readonly genomeBuild?: string;

  /**
   * A relative reference to a DNA strand based on gene orientation. The
   * strand that contains the open reading frame of the gene is the &quot;sense&quot;
   * strand, and the opposite complementary strand is the &quot;antisense&quot;
   * strand.
   */
  readonly orientation?: string;

  /**
   * Reference identifier of reference sequence submitted to NCBI. It must
   * match the type in the MolecularSequence.type field. For example, the
   * prefix, &ldquo;NG_&rdquo; identifies reference sequence for genes, &ldquo;NM_&rdquo; for
   * messenger RNA transcripts, and &ldquo;NP_&rdquo; for amino acid sequences.
   */
  readonly referenceSeqId?: CodeableConcept;

  /**
   * A pointer to another MolecularSequence entity as reference sequence.
   */
  readonly referenceSeqPointer?: Reference;

  /**
   * A string like &quot;ACGT&quot;.
   */
  readonly referenceSeqString?: string;

  /**
   * An absolute reference to a strand. The Watson strand is the strand
   * whose 5'-end is on the short arm of the chromosome, and the Crick
   * strand as the one whose 5'-end is on the long arm.
   */
  readonly strand?: string;

  /**
   * Start position of the window on the reference sequence. If the
   * coordinate system is either 0-based or 1-based, then start position is
   * inclusive.
   */
  readonly windowStart?: number;

  /**
   * End position of the window on the reference sequence. If the
   * coordinate system is 0-based then end is exclusive and does not
   * include the last position. If the coordinate system is 1-base, then
   * end is inclusive and includes the last position.
   */
  readonly windowEnd?: number;
}

/**
 * Raw data describing a biological sequence.
 */
export interface MolecularSequenceRepository {

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
   * Click and see / RESTful API / Need login to see / RESTful API with
   * authentication / Other ways to see resource.
   */
  readonly type?: string;

  /**
   * URI of an external repository which contains further details about the
   * genetics data.
   */
  readonly url?: string;

  /**
   * URI of an external repository which contains further details about the
   * genetics data.
   */
  readonly name?: string;

  /**
   * Id of the variant in this external repository. The server will
   * understand how to use this id to call for more info about datasets in
   * external repository.
   */
  readonly datasetId?: string;

  /**
   * Id of the variantset in this external repository. The server will
   * understand how to use this id to call for more info about variantsets
   * in external repository.
   */
  readonly variantsetId?: string;

  /**
   * Id of the read in this external repository.
   */
  readonly readsetId?: string;
}

/**
 * Raw data describing a biological sequence.
 */
export interface MolecularSequenceRoc {

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
   * Invidual data point representing the GQ (genotype quality) score
   * threshold.
   */
  readonly score?: number[];

  /**
   * The number of true positives if the GQ score threshold was set to
   * &quot;score&quot; field value.
   */
  readonly numTP?: number[];

  /**
   * The number of false positives if the GQ score threshold was set to
   * &quot;score&quot; field value.
   */
  readonly numFP?: number[];

  /**
   * The number of false negatives if the GQ score threshold was set to
   * &quot;score&quot; field value.
   */
  readonly numFN?: number[];

  /**
   * Calculated precision if the GQ score threshold was set to &quot;score&quot;
   * field value.
   */
  readonly precision?: number[];

  /**
   * Calculated sensitivity if the GQ score threshold was set to &quot;score&quot;
   * field value.
   */
  readonly sensitivity?: number[];

  /**
   * Calculated fScore if the GQ score threshold was set to &quot;score&quot; field
   * value.
   */
  readonly fMeasure?: number[];
}

/**
 * Raw data describing a biological sequence.
 */
export interface MolecularSequenceStructureVariant {

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
   * Information about chromosome structure variation DNA change type.
   */
  readonly variantType?: CodeableConcept;

  /**
   * Used to indicate if the outer and inner start-end values have the same
   * meaning.
   */
  readonly exact?: boolean;

  /**
   * Length of the variant chromosome.
   */
  readonly length?: number;

  /**
   * Structural variant outer.
   */
  readonly outer?: MolecularSequenceOuter;

  /**
   * Structural variant inner.
   */
  readonly inner?: MolecularSequenceInner;
}

/**
 * Raw data describing a biological sequence.
 */
export interface MolecularSequenceVariant {

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
   * Start position of the variant on the  reference sequence. If the
   * coordinate system is either 0-based or 1-based, then start position is
   * inclusive.
   */
  readonly start?: number;

  /**
   * End position of the variant on the reference sequence. If the
   * coordinate system is 0-based then end is exclusive and does not
   * include the last position. If the coordinate system is 1-base, then
   * end is inclusive and includes the last position.
   */
  readonly end?: number;

  /**
   * An allele is one of a set of coexisting sequence variants of a gene
   * ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).
   * Nucleotide(s)/amino acids from start position of sequence to stop
   * position of sequence on the positive (+) strand of the observed
   * sequence. When the sequence  type is DNA, it should be the sequence on
   * the positive (+) strand. This will lay in the range between
   * variant.start and variant.end.
   */
  readonly observedAllele?: string;

  /**
   * An allele is one of a set of coexisting sequence variants of a gene
   * ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).
   * Nucleotide(s)/amino acids from start position of sequence to stop
   * position of sequence on the positive (+) strand of the reference
   * sequence. When the sequence  type is DNA, it should be the sequence on
   * the positive (+) strand. This will lay in the range between
   * variant.start and variant.end.
   */
  readonly referenceAllele?: string;

  /**
   * Extended CIGAR string for aligning the sequence with reference bases.
   * See detailed documentation
   * [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).
   */
  readonly cigar?: string;

  /**
   * A pointer to an Observation containing variant information.
   */
  readonly variantPointer?: Reference;
}
