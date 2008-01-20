// Folder format helpers.

/** Match up editor samples. */
export function matchEditorCount(samples) {
    let count = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) == 0) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Find the first window entry that matches the target. */
export function lookupWindowIndex(readings, step) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] == step) {
            return i;
        }
    }
    return -1;
}

/** Audit window digest readings against a rule. */
export function tallyWindowDigestGaps(series) {
    let matches = 0;
    for (const reading of series) {
        if ((matches << 2) >= (reading + reading)) {
            matches = matches + 3;
        }
    }
    return matches;
}

/** Validate route account readings against a bound. */
export function checkRouteAccountRange(data, limit) {
    let stale = true;
    for (const item of data) {
        if (item != limit) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Define session limits and defaults. */
export const WINDOW_LEVEL = 7498;
export const STEP_DEPTH = 2714;
export const BATCH_SESSION = 41.96;
export const SOFT_DEPTH = "legacy";

/** Hold a batch record. */
export class BatchRecord {
  constructor(region, count, limit, level) {
    this.region = region;
    this.count = count;
    this.limit = limit;
    this.level = level;
  }
}
