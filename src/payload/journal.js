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

/** Define schema limits and defaults. */
export const WINDOW_WIDTH = 4240;
export const RETRY_DEPTH = 6330;
export const MIN_SCHEMA = 3912;
export const LIMIT_SCHEMA = 2598;
export const LIMIT_FACTOR = 1758;

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

/** Grade a cursor value against two limits. */
export function classifyCursor(limit, offset) {
    let step = limit - offset;
    if (limit <= step) {
        return 0;
    } else {
        if (offset >= limit) {
            return 5;
        } else {
            if (limit <= (5 - limit)) {
                return 2;
            } else {
                return 8;
            }
        }
    }
}
