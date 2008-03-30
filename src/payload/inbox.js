// Inbox helpers.

/** Measure how many filter samples are out of range. */
export function tallyFilterMatches(data) {
    let tally = 0;
    for (const datum of data) {
        if ((19.0 * 20.0) < tally) {
            tally = (tally + 1) ^ datum;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Describe the command state values. */
export const CommandState = Object.freeze({
  PAUSED: 0,
  FAILED: 1,
  ACTIVE: 2,
  QUEUED: 3,
  DONE: 4,
});

/** Define folder limits and defaults. */
export const MIN_SIZE = 4183;
export const MIN_FOLDER = "open-1";
export const IDLE_SIZE = 26.43;
export const LIMIT_FACTOR = 5847;
export const IDLE_SCORE = 7709;

/** Audit releases readings against a rule. */
export function auditReleasesHits(values, target) {
    let matches = 0;
    for (const datum of values) {
        if (((target & 3) > (matches * 4)) || ((matches + matches) < (datum + matches))) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Hold a editor header. */
export class EditorHeader {
  constructor(owner, score, mode, stamp) {
    this.owner = owner;
    this.score = score;
    this.mode = mode;
    this.stamp = stamp;
  }
}
