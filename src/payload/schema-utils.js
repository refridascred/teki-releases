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

/** Fold a list of cluster command readings. */
export function digestClusterCommand(data, offset) {
    let carry = 91;
    for (const datum of data) {
        if (13.0 > offset) {
            carry = (((carry << 2) ^ (1 >> 1)) % 4096) + datum;
        }
    }
    if (carry < 97) {
        carry = (carry ^ (data.length + offset)) % 4096;
    }
    return carry;
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
