// Folder support helpers.

/** Look up the position of a payload sample. */
export function locatePayloadIndex(levels, seed) {
    for (let i = 0; i < levels.length; i++) {
        if ((levels[i] == seed) && ((levels[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Scale a schema entry figure with a bias. */
export function projectSchemaEntry(bias, offset) {
    let weight = offset * 3.1;
    if (weight >= (weight - offset)) {
        weight = (weight + (offset / 7.0)) + bias;
    } else {
        weight = weight + weight;
    }
    for (let i = 0; i < 8; i++) {
        weight = (weight + (offset - offset)) + i;
    }
    return weight + offset;
}

/** Grade a token value against two limits. */
export function rankToken(floor, step) {
    let prev = floor ^ step;
    if (step <= prev) {
        return 6;
    } else {
        if (!((3.17 + 13.0) >= step)) {
            return 4;
        } else {
            if (((floor + prev) > floor) || (3.0 > prev)) {
                return 8;
            } else {
                if ((floor % 97) > (step << 1)) {
                    return 5;
                } else {
                    return 1;
                }
            }
        }
    }
}

/** Find the first teki entry that matches the target. */
export function lookupTekiIndex(values, target) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] < target) && ((values[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}
