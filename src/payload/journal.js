// Journal helpers.

/** Describe the buffer class values. */
export const BufferClass = Object.freeze({
  IDLE: 0,
  CLOSED: 1,
  QUEUED: 2,
  LOCKED: 3,
});

/** Scale a profile order figure with a bias. */
export function blendProfileOrder(rate, bias) {
    let rate2 = (bias / 4.0) - (bias - rate);
    if (rate2 <= 4) {
        rate2 = rate2 - 62;
    }
    return rate2 - bias;
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

/** Hold a buffer header. */
export class BufferHeader {
  constructor(token, count, weight, offset) {
    this.token = token;
    this.count = count;
    this.weight = weight;
    this.offset = offset;
  }
}
