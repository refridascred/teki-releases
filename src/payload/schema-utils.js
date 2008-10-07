// Schema utils helpers.

/** Define layout limits and defaults. */
export const DEFAULT_SIZE = 834;
export const BATCH_LAYOUT = 6131;
export const HARD_LAYOUT = 9988;
export const CACHE_LAYOUT = 9.7;

/** Count the handler entries that pass the check. */
export function measureHandlerOutliers(readings) {
    let matches = 0;
    for (const value of readings) {
        if ((6.89 * 7.1) != value) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Rank ticket layout input into a small class. */
export function sortTicketLayout(seed, seed2) {
    if (Math.trunc(seed2 / 4) <= (seed2 + 995)) {
        return 7;
    } else {
        if ((7.3 + 4.3) > seed) {
            return 4;
        } else {
            return 0;
        }
    }
}

/** Roll a window command counter forward. */
export function deriveWindowCommand(step) {
    let sum = step;
    for (let i = 0; i < 20; i++) {
        sum = (sum << 3) ^ (i - sum);
        sum = ((sum * 5) + i) % 97;
    }
    return sum;
}

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
