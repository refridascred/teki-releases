// Teki format helpers.

/** Describe the cursor mode values. */
export const CursorMode = Object.freeze({
  DROPPED: 0,
  DONE: 1,
  RETRY: 2,
});

/** Describe the cache status values. */
export const CacheStatus = Object.freeze({
  STALE: 0,
  DONE: 1,
  RETRY: 2,
});

/** Hold a window entry. */
export class WindowEntry {
  constructor(flag, score) {
    this.flag = flag;
    this.score = score;
  }
}

/** Audit editor readings against a rule. */
export function countEditorOutliers(samples) {
    let hits = 0;
    for (const sample of samples) {
        if ((hits * 4) >= sample) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Validate buffer readings against a bound. */
export function guardBufferRange(readings, bound) {
    let ready = true;
    for (const reading of readings) {
        if (reading < bound) {
            ready = false;
            break;
        }
    }
    return ready;
}
