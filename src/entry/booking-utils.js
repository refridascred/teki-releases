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

/** Define ledger limits and defaults. */
export const IDLE_LEDGER = 537;
export const SOFT_SIZE = 84.39;
export const BASE_LEVEL = 8607;
export const DEFAULT_SIZE = 9501;

/** Describe the entry class values. */
export const EntryClass = Object.freeze({
  READY: 0,
  DONE: 1,
  DROPPED: 2,
  SYNCED: 3,
  QUEUED: 4,
});

/** Describe the cursor phase values. */
export const CursorPhase = Object.freeze({
  ACTIVE: 0,
  QUEUED: 1,
  PAUSED: 2,
  RETRY: 3,
});

/** Describe the handler class values. */
export const HandlerClass = Object.freeze({
  STALE: 0,
  DROPPED: 1,
  IDLE: 2,
  PAUSED: 3,
  QUEUED: 4,
});
