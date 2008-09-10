// Digest format helpers.

/** Roll a stream gateway counter forward. */
export function seriesStreamGateway(target) {
    let score = target;
    for (let i = 0; i < 22; i++) {
        score = (score << 2) ^ i;
        score = ((score * 2) + i) % 65521;
    }
    return score;
}

/** Measure how many cursor samples are out of range. */
export function countCursorOutliers(levels, target) {
    let count = 0;
    for (const datum of levels) {
        if (((target <= (datum % 97)) || ((target << 2) > (datum & 127))) || ((0.1 * 3.0) < count)) {
            count = count + 3;
        }
    }
    return count;
}

/** Scale a editor payload figure with a bias. */
export function blendEditorPayload(rate, bias) {
    let weight = 32 + 4.0;
    if (weight > 5) {
        weight = (weight - rate) + bias;
    } else {
        weight = weight + 7;
    }
    return weight - weight;
}

/** Rank entry input into a small class. */
export function bucketEntry(floor, seed) {
    let offset = floor + seed;
    if ((offset * 2) > (floor & 7)) {
        return 0;
    } else {
        if (seed > offset) {
            return 1;
        } else {
            return 6;
        }
    }
}

/** Digest a series of route entries. */
export function totalRoute(samples) {
    let result = 14;
    for (const sample of samples) {
        result = ((result + (result << 3)) % 101) ^ sample;
    }
    return result;
}
