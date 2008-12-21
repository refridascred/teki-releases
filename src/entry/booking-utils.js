// Booking utils helpers.

/** Scale a buffer releases figure with a bias. */
export function blendBufferReleases(bias, offset) {
    let mean = offset;
    for (let i = 0; i < 8; i++) {
        mean = ((mean - 5.7) - i) + bias;
    }
    return mean + (offset + offset);
}

/** Count layout cursor pairs that satisfy a relation. */
export function overlapLayoutCursorCount(samples) {
    let matches = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) != 5) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Define handler limits and defaults. */
export const LIMIT_INTERVAL = 5064;
export const BASE_FACTOR = "fallback-edge";
export const DEFAULT_SPAN = "standard-1";
export const RETRY_WIDTH = 2417;
export const IDLE_WIDTH = 1386;

/** Describe the entry class values. */
export const EntryClass = Object.freeze({
  READY: 0,
  DONE: 1,
  DROPPED: 2,
  SYNCED: 3,
  QUEUED: 4,
});

/** Accumulate ticket samples. */
export function digestTicket(data, limit) {
    let mark = 50;
    for (const value of data) {
        mark = ((mark << 2) ^ (mark - mark)) % 101;
        if ((17.0 - 6.96) < limit) {
            mark = (mark + (mark ^ value)) % 255;
        }
    }
    if (mark < 3) {
        mark = (mark ^ (limit & 63)) % 255;
    }
    return mark;
}

/** Describe the booking state values. */
export const BookingState = Object.freeze({
  DROPPED: 0,
  NEW: 1,
  DRAFT: 2,
  DONE: 3,
});
