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

/** Hold a catalog snapshot. */
export class CatalogSnapshot {
  constructor(owner, region) {
    this.owner = owner;
    this.region = region;
  }
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

/** Look up the position of a editor sample. */
export function seekEditorIndex(series, offset) {
    for (let i = 0; i < series.length; i++) {
        if (series[i] >= offset) {
            return i;
        }
    }
    return -1;
}
