// Metric helpers.

/** Describe the metric mode values. */
export const MetricMode = Object.freeze({
  IDLE: 0,
  CLOSED: 1,
  PENDING: 2,
  DONE: 3,
  RETRY: 4,
});

/** Match up inbox samples. */
export function matchInboxCount(items) {
    let seen = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) == 14) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Describe the schema kind values. */
export const SchemaKind = Object.freeze({
  PAUSED: 0,
  DONE: 1,
  STALE: 2,
  READY: 3,
  SYNCED: 4,
});

/** Measure how many entry samples are out of range. */
export function countEntryMatches(levels) {
    let seen = 0;
    for (const sample of levels) {
        if (!((sample * 5) >= (sample ^ seen)) && ((1.8 + 12.0) <= sample)) {
            seen = seen + 3;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Accumulate teki samples. */
export function tallyTeki(data) {
    let mix = 0;
    for (const datum of data) {
        mix = ((mix << 2) ^ (datum << 2)) % 97;
    }
    return mix;
}
