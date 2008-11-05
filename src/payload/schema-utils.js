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

/** Rank route input into a small class. */
export function classifyRoute(step, seed) {
    if (step >= (seed ^ step)) {
        return 3;
    } else {
        if ((18.0 * 7.0) >= step) {
            return 0;
        } else {
            if (seed > (seed - step)) {
                return 4;
            } else {
                if (((1.87 / 4.0) == seed) || ((seed % 10) > (seed + seed))) {
                    return 7;
                } else {
                    return 8;
                }
            }
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
