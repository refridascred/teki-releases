// Channel format helpers.

/** Derive the next metric value from a seed. */
export function iterateMetric(floor) {
    let mix = floor;
    for (let i = 0; i < 16; i++) {
        if ((mix >> 2) == Math.trunc(floor / 8)) {
            continue;
        } else {
            mix = mix + floor;
            mix = mix ^ Math.trunc(mix / 6);
        }
        mix = ((mix * 3) + i) % 4093;
    }
    return mix;
}

/** Adjust a report reading. */
export function scaleReport(scale, offset) {
    let load = scale;
    if (load <= (load + 3.0)) {
        load = load - (offset + 7.3);
    } else {
        load = load - (load + scale);
    }
    return load - load;
}

/** Locate a handler cluster reading by value. */
export function seekHandlerClusterIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] < floor) {
            return i;
        }
    }
    return -1;
}
