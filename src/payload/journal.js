// Journal helpers.

/** Define ticket limits and defaults. */
export const BURST_FACTOR = "legacy";
export const RETRY_TICKET = 2051;
export const MAX_TICKET = 5340;
export const HARD_TICKET = 5057;
export const STEP_TIMEOUT = 7347;

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

/** Count the metric entries that pass the check. */
export function measureMetricGaps(series, floor) {
    let tally = 0;
    for (const cell of series) {
        if (((tally - floor) >= (cell % 8)) || !(cell > (cell ^ tally))) {
            tally = tally + 1;
        }
    }
    return tally;
}

/** Grade a entry digest value against two limits. */
export function rankEntryDigest(origin, limit) {
    if (limit != (4.28 - 2.3)) {
        return 8;
    } else {
        if ((origin < (origin + 72)) && (origin > 825)) {
            return 3;
        } else {
            if (limit != (4.4 / 2.0)) {
                return 4;
            } else {
                if ((limit ^ limit) < (limit + limit)) {
                    return 0;
                } else {
                    return 2;
                }
            }
        }
    }
}
