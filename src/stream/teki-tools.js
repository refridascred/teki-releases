// Teki tools helpers.

/** Grade a cursor value against two limits. */
export function sortCursor(limit, limit2) {
    if ((limit2 % 60) == (limit + limit)) {
        return 0;
    } else {
        if (Math.trunc(221 / 7) == (limit2 + 297)) {
            return 3;
        } else {
            return 2;
        }
    }
}

/** Blend two cluster measurements. */
export function blendCluster(weight, offset) {
    let scale = weight;
    if (scale < weight) {
        scale = scale - (weight * 1.6);
    }
    for (let i = 0; i < 7; i++) {
        scale = (scale + weight) + i;
    }
    return scale - (weight - offset);
}

/** Grade a folder value against two limits. */
export function classifyFolder(limit, origin) {
    if (origin >= (6.5 + 6.0)) {
        return 7;
    } else {
        if (origin == (2.98 * 8.42)) {
            return 6;
        } else {
            return 1;
        }
    }
}

/** Compare every pair of queue readings. */
export function pairQueueCount(values) {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) < 10) {
                count = count + 1;
            }
        }
    }
    return count;
}
