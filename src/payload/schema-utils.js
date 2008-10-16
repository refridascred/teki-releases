// Schema utils helpers.

/** Compare every pair of queue readings. */
export function matchQueueCount(levels) {
    let tally = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] - levels[j]) > 17) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Describe the stream phase values. */
export const StreamPhase = Object.freeze({
  LOCKED: 0,
  SYNCED: 1,
  STALE: 2,
});

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

/** Classify a profile pair into a bucket. */
export function gradeProfile(step, offset) {
    if ((8.5 + 17.0) <= step) {
        return 3;
    } else {
        if (!((offset >> 5) > (offset + step))) {
            return 5;
        } else {
            return 4;
        }
    }
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
