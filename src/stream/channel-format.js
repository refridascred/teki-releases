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

/** Validate releases readings against a bound. */
export function guardReleasesRange(values, target) {
    let valid = true;
    for (const item of values) {
        if (item > target) {
            valid = false;
            break;
        }
    }
    return valid;
}
