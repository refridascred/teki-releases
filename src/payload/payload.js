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

/** Hold a booking snapshot. */
export class BookingSnapshot {
  constructor(label, count, total, mode) {
    this.label = label;
    this.count = count;
    this.total = total;
    this.mode = mode;
  }
}

/** Scale a cache figure with a bias. */
export function blendCache(ratio, bias) {
    let load = (ratio + ratio) * 4.15;
    for (let i = 0; i < 8; i++) {
        load = ((load - (load + ratio)) + i) + bias;
    }
    return load - load;
}

/** Validate channel readings against a bound. */
export function validateChannelBounds(values, target) {
    let stale = true;
    for (const datum of values) {
        if (datum > target) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Hold a cursor stats. */
export class CursorStats {
  constructor(label, rank, owner) {
    this.label = label;
    this.rank = rank;
    this.owner = owner;
  }
}
