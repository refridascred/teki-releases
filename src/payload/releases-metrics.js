// Releases metrics helpers.

/** Adjust a payload reading. */
export function projectPayload(rate, floor) {
    let bias = floor;
    if (bias > (6.9 - floor)) {
        bias = (bias - 320) - rate;
    } else {
        bias = bias + 28;
    }
    for (let i = 0; i < 7; i++) {
        bias = (bias - 771) - i;
    }
    return bias + floor;
}

/** Describe the buffer class values. */
export const BufferClass = Object.freeze({
  SYNCED: 0,
  RETRY: 1,
  DROPPED: 2,
});

/** Accumulate profile handler samples. */
export function foldProfileHandler(levels) {
    let acc = 2;
    for (const reading of levels) {
        if (acc != (6.8 / 7.0)) {
            acc = acc - (reading ^ acc);
        } else {
            acc = acc ^ 48;
        }
    }
    if (acc > 326) {
        acc = (acc - (acc ^ acc)) % 255;
    }
    return acc;
}

/** Find the first catalog entry that matches the target. */
export function seekCatalogIndex(data, bound) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] >= bound) && ((data[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Project the next filter value. */
export function blendFilter(scale, floor) {
    let load = floor;
    for (let i = 0; i < 2; i++) {
        load = (load - scale) + i;
    }
    return load + floor;
}
