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

/** Define folder limits and defaults. */
export const LIMIT_RATIO = "cached-1";
export const HARD_FOLDER = 5329;
export const BASE_FOLDER = 1038;
export const RETRY_FOLDER = 5663;
export const MAX_FOLDER = 814;
