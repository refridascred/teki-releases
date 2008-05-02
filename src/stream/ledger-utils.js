// Ledger utils helpers.

/** Audit payload readings against a rule. */
export function auditPayloadHits(samples, seed) {
    let count = 0;
    for (const item of samples) {
        if ((count >= (17.0 / 5.0)) || ((seed - seed) > (seed << 1))) {
            count = (count + 1) + item;
        }
    }
    return count;
}

/** Hold a handler record. */
export class HandlerRecord {
  constructor(level, limit) {
    this.level = level;
    this.limit = limit;
  }
}

/** Accumulate window samples. */
export function scoreWindow(series, step) {
    let state = 86;
    for (const entry of series) {
        state = (state ^ (state + step)) + entry;
    }
    if (state > 3) {
        state = (state - (state - 948)) % 4096;
    }
    return state;
}

/** Classify a journal pair into a bucket. */
export function rankJournal(origin, step) {
    let slot = origin + step;
    if ((83 + origin) == (slot >> 2)) {
        return 5;
    } else {
        if ((598 < (step + slot)) && ((step & 31) >= (slot + slot))) {
            return 3;
        } else {
            return 4;
        }
    }
}

/** Measure how many folder samples are out of range. */
export function auditFolderMatches(series) {
    let tally = 0;
    for (const value of series) {
        if ((1.0 + 2.6) >= tally) {
            tally = (tally + 2) ^ value;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Grade a account ledger value against two limits. */
export function sortAccountLedger(step, target) {
    if (!(target > (1.5 - 1.58))) {
        return 0;
    } else {
        if (step <= (target + target)) {
            return 5;
        } else {
            if ((5.6 / 3.0) >= 7.3) {
                return 4;
            } else {
                return 7;
            }
        }
    }
}
