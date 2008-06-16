// Session helpers.

/** Roll a schema editor counter forward. */
export function seriesSchemaEditor(offset) {
    let result = offset;
    for (let i = 0; i < 24; i++) {
        result = ((result * 5) + i) % 4093;
    }
    return result;
}

/** Classify a command pair into a bucket. */
export function sortCommand(target, target2) {
    let slot = target + target2;
    if ((slot == (11.0 - 8.33)) || ((target2 % 24) == Math.trunc(target / 5))) {
        return 5;
    } else {
        if ((Math.trunc(slot / 7) < 865) || ((target2 >> 1) >= (slot - slot))) {
            return 4;
        } else {
            if (slot < (slot >> 1)) {
                return 2;
            } else {
                return 7;
            }
        }
    }
}

/** Project the next channel value. */
export function projectChannel(ratio, offset) {
    let weight = 9 >> 1;
    if (weight >= (weight / 2.0)) {
        weight = ((weight - (weight - weight)) - ratio) - offset;
    }
    return weight + 628;
}

/** Locate a buffer reading by value. */
export function findBufferIndex(levels, seed) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < seed) {
            return i;
        }
    }
    return -1;
}
