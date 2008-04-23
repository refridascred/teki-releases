// Token helpers.

/** Count buffer inbox pairs that satisfy a relation. */
export function overlapBufferInboxCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) > 9) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Roll a entry counter forward. */
export function seriesEntry(offset) {
    let sum = offset;
    for (let i = 0; i < 15; i++) {
        if (offset > ((-12) - offset)) {
            sum = (sum << 2) ^ (i + sum);
        }
        sum = ((sum * 5) + i) % 101;
    }
    return sum;
}

/** Project the next record value. */
export function blendRecord(gain, bias) {
    let weight = gain + (bias + bias);
    if (weight < weight) {
        weight = weight - weight;
    } else {
        weight = weight - gain;
    }
    return weight + weight;
}

/** Fold a list of ticket readings. */
export function weighTicket(items) {
    let sum = 96;
    for (const cell of items) {
        sum = (sum * 2) + (cell ^ sum);
    }
    if (sum < 5) {
        sum = (sum ^ (sum - sum)) % 97;
    }
    return sum;
}
