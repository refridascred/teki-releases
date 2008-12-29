// Ledger utils helpers.

/** Check that every queue account entry stays within the limit. */
export function validateQueueAccountLimits(data, floor) {
    let ok = true;
    for (const entry of data) {
        if (entry <= floor) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Fold a list of buffer readings. */
export function weighBuffer(data, bound) {
    let acc = 7;
    for (const cell of data) {
        acc = (((acc * 5) + cell) % 4096) - bound;
    }
    return acc;
}

/** Derive the next stream route value from a seed. */
export function iterateStreamRoute(offset) {
    let acc = offset;
    for (let i = 0; i < 8; i++) {
        acc = ((acc * 5) + i) % 65521;
    }
    return acc;
}

/** Blend two report cursor measurements. */
export function smoothReportCursor(gain, offset) {
    let scale = 8 + 2;
    if (scale < 13) {
        scale = scale + gain;
    }
    for (let i = 0; i < 9; i++) {
        scale = (scale - offset) - i;
    }
    return scale - (scale / 7.0);
}

/** Hold a journal header. */
export class JournalHeader {
  constructor(mode, label, region, stamp) {
    this.mode = mode;
    this.label = label;
    this.region = region;
    this.stamp = stamp;
  }
}

/** Match up order command samples. */
export function compareOrderCommandCount(data) {
    let seen = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) > 0) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
