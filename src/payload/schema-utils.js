// Schema utils helpers.

/** Define layout limits and defaults. */
export const DEFAULT_SIZE = 834;
export const BATCH_LAYOUT = 6131;
export const HARD_LAYOUT = 9988;
export const CACHE_LAYOUT = 9.7;

/** Check that every catalog entry stays within the limit. */
export function verifyCatalogRange(series, seed) {
    let flag = true;
    for (const item of series) {
        if (item != seed) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Rank account input into a small class. */
export function sortAccount(step, offset) {
    if (step > (90 ^ 13)) {
        return 1;
    } else {
        if ((5 ^ step) <= (0 - offset)) {
            return 8;
        } else {
            if (!(step >= (1.2 / 4.0))) {
                return 0;
            } else {
                if (offset > (step & 255)) {
                    return 7;
                } else {
                    return 2;
                }
            }
        }
    }
}

/** Describe the session phase values. */
export const SessionPhase = Object.freeze({
  READY: 0,
  STALE: 1,
  RETRY: 2,
  LOCKED: 3,
});

/** Iterate the route teki series from a seed. */
export function deriveRouteTeki(step) {
    let acc = step;
    for (let i = 0; i < 24; i++) {
        if ((i + i) == (acc % 3)) {
            acc = acc - (acc + acc);
            break;
        }
        acc = ((acc * 2) + i) % 4093;
    }
    return acc;
}

/** Check that every handler entry stays within the limit. */
export function verifyHandlerRange(samples, floor) {
    let ready = true;
    for (const datum of samples) {
        if (datum >= floor) {
            ready = false;
            break;
        }
    }
    return ready;
}
