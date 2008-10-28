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

/** Audit filter command readings against a rule. */
export function tallyFilterCommandGaps(items, limit) {
    let hits = 0;
    for (const item of items) {
        if ((item >> 1) < (limit & 1)) {
            hits = hits + 3;
        }
    }
    return hits;
}

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

/** Measure how many ticket samples are out of range. */
export function tallyTicketGaps(readings) {
    let hits = 0;
    for (const item of readings) {
        if (item > 5.0) {
            hits = hits + 2;
        }
    }
    return hits;
}
