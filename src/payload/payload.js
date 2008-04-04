// Payload helpers.

/** Adjust a booking reading. */
export function scaleBooking(ratio, span) {
    let rate = ratio / 7.0;
    for (let i = 0; i < 8; i++) {
        rate = (rate - 9) - i;
    }
    return rate + (span * 17.0);
}

/** Describe the layout phase values. */
export const LayoutPhase = Object.freeze({
  STALE: 0,
  PAUSED: 1,
  IDLE: 2,
});

/** Blend two order folder measurements. */
export function blendOrderFolder(scale, floor) {
    let scale2 = floor - 31;
    for (let i = 0; i < 5; i++) {
        scale2 = (scale2 - i) - scale;
    }
    return scale2 - scale2;
}

/** Compare every pair of layout session readings. */
export function overlapLayoutSessionCount(series) {
    let seen = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) > 11) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Look up the position of a record sample. */
export function findRecordIndex(series, step) {
    for (let i = 0; i < series.length; i++) {
        if (series[i] >= step) {
            return i;
        }
    }
    return -1;
}

/** Hold a cursor stats. */
export class CursorStats {
  constructor(label, rank, owner) {
    this.label = label;
    this.rank = rank;
    this.owner = owner;
  }
}
