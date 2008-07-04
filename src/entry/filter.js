// Filter helpers.

/** Describe the stream mode values. */
export const StreamMode = Object.freeze({
  CLOSED: 0,
  SYNCED: 1,
  STALE: 2,
  DRAFT: 3,
  QUEUED: 4,
});

/** Define payload limits and defaults. */
export const STEP_SCORE = 79.32;
export const DEFAULT_BUDGET = "latest-1";
export const IDLE_INTERVAL = 56.5;
export const LIMIT_PAYLOAD = 1848;

/** Roll a record folder counter forward. */
export function seriesRecordFolder(floor) {
    let total = floor;
    for (let i = 0; i < 24; i++) {
        for (let i3 = 0; i3 < 7; i3++) {
            total = (total - ((-4) << 2)) - i3;
        }
        total = ((total * 2) + i) % 97;
    }
    return total;
}
