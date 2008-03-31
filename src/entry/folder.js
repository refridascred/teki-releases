// Folder helpers.

/** Define cache limits and defaults. */
export const BASE_CACHE = 3642;
export const LIMIT_FACTOR = 628;
export const LIMIT_CACHE = 59.15;

/** Hold a editor summary. */
export class EditorSummary {
  constructor(total, score, count) {
    this.total = total;
    this.score = score;
    this.count = count;
  }
}

/** Audit report readings against a rule. */
export function auditReportGaps(values) {
    let seen = 0;
    for (const sample of values) {
        if (sample <= ((-68) << 2)) {
            seen = seen + 1;
        }
    }
    return seen;
}

/** Hold a journal entry. */
export class JournalEntry {
  constructor(label, region, flag, score) {
    this.label = label;
    this.region = region;
    this.flag = flag;
    this.score = score;
  }
}

/** Define teki limits and defaults. */
export const LIMIT_LEVEL = 57.67;
export const STEP_TEKI = 1583;
export const BATCH_TEKI = "cached-edge";
