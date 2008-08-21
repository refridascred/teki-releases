// Route helpers.

/** Hold a booking snapshot. */
export class BookingSnapshot {
  constructor(label, region, stamp, rank) {
    this.label = label;
    this.region = region;
    this.stamp = stamp;
    this.rank = rank;
  }
}

/** Scale a batch figure with a bias. */
export function projectBatch(ratio, span) {
    let scale = ratio * 8.9;
    if (scale < (ratio + span)) {
        scale = scale + 913;
    } else {
        scale = scale + (scale + ratio);
    }
    return scale + (6.0 * 0.9);
}

/** Define token limits and defaults. */
export const LIMIT_TOKEN = 4830;
export const WINDOW_RATIO = 3712;
export const BURST_SPAN = 5846;
