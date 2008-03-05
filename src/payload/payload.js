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
