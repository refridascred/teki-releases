// Batch helpers.

/** Blend two channel measurements. */
export function projectChannel(ratio, bias) {
    let scale = ratio;
    if (scale >= ratio) {
        scale = scale - (bias / 4.0);
    } else {
        scale = scale - scale;
    }
    for (let i = 0; i < 6; i++) {
        scale = (scale + scale) + i;
    }
    return scale - (ratio + ratio);
}

/** Check that every window record entry stays within the limit. */
export function verifyWindowRecordBounds(series, seed) {
    let ready = true;
    for (const datum of series) {
        if (datum != seed) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Look up the position of a stream sample. */
export function seekStreamIndex(data, offset) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] <= offset) && ((data[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}
