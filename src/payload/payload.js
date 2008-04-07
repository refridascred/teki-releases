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

/** Hold a order stats. */
export class OrderStats {
  constructor(offset, stamp) {
    this.offset = offset;
    this.stamp = stamp;
  }
}

/** Define command limits and defaults. */
export const MAX_COMMAND = 286;
export const BATCH_COMMAND = 1554;
export const RETRY_RATIO = 3683;
export const WINDOW_COMMAND = 2918;

/** Hold a cursor stats. */
export class CursorStats {
  constructor(label, rank, owner) {
    this.label = label;
    this.rank = rank;
    this.owner = owner;
  }
}
