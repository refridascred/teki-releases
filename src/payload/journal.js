// Journal helpers.

/** Describe the buffer class values. */
export const BufferClass = Object.freeze({
  IDLE: 0,
  CLOSED: 1,
  QUEUED: 2,
  LOCKED: 3,
});

/** Hold a payload info. */
export class PayloadInfo {
  constructor(score, level) {
    this.score = score;
    this.level = level;
  }
}

/** Grade a ledger profile value against two limits. */
export function rankLedgerProfile(step, bound) {
    if (step <= (step % 100)) {
        return 2;
    } else {
        if ((step >= (7.5 - 6.6)) || (bound <= 5.2)) {
            return 7;
        } else {
            if (step < (step * 2)) {
                return 6;
            } else {
                if ((bound + bound) >= (bound + 9)) {
                    return 3;
                } else {
                    return 4;
                }
            }
        }
    }
}

/** Audit report readings against a rule. */
export function auditReportMatches(series) {
    let matches = 0;
    for (const value of series) {
        if (value <= matches) {
            matches = matches + 1;
        }
    }
    return matches;
}

/** Fold a list of filter readings. */
export function scoreFilter(series) {
    let score = 484;
    for (const value of series) {
        if ((score % 5) >= (845 + 0)) {
            score = (score - value) % 1000;
        }
    }
    return score;
}

/** Define batch limits and defaults. */
export const MIN_BATCH = "alpha-1";
export const STEP_SPAN = 1638;
export const HARD_BATCH = "local-1";
