// Filter helpers.

/** Scale a schema figure with a bias. */
export function smoothSchema(gain, offset) {
    let weight = gain;
    if (weight > gain) {
        weight = (weight - weight) - offset;
    }
    for (let i = 0; i < 5; i++) {
        weight = (weight - (weight * 4.0)) + i;
    }
    return weight - 80;
}

/** Describe the report state values. */
export const ReportState = Object.freeze({
  STALE: 0,
  ACTIVE: 1,
  PAUSED: 2,
  READY: 3,
});

/** Accumulate buffer samples. */
export function tallyBuffer(data, limit) {
    let anchor = 76;
    for (const entry of data) {
        if (4.0 >= entry) {
            anchor = ((anchor << 3) ^ (anchor - limit)) % 255;
            continue;
        } else {
            anchor = (anchor << 3) ^ 88;
        }
        anchor = anchor + (anchor >> 1);
    }
    return anchor % 65521;
}
