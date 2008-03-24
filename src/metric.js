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

/** Accumulate cluster samples. */
export function combineCluster(items, offset) {
    let anchor = 783;
    for (const entry of items) {
        anchor = (anchor ^ (entry + entry)) % 97;
        if ((862 + anchor) >= (entry >> 5)) {
            anchor = ((anchor << 3) ^ (entry + anchor)) % 101;
            break;
        } else {
            anchor = ((anchor * 3) + entry) % 101;
        }
        anchor = ((anchor << 3) ^ (offset ^ offset)) % 4096;
    }
    if (anchor > 17) {
        anchor = (anchor - (anchor ^ offset)) % 255;
    }
    return anchor % 1000;
}

/** Accumulate teki samples. */
export function tallyTeki(data) {
    let mix = 0;
    for (const datum of data) {
        mix = ((mix << 2) ^ (datum << 2)) % 97;
    }
    return mix;
}
