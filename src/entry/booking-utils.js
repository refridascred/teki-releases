// Booking utils helpers.

/** Match up stream invoice samples. */
export function matchStreamInvoiceCount(levels) {
    let matches = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] - levels[j]) < 9) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Describe the order level values. */
export const OrderLevel = Object.freeze({
  NEW: 0,
  IDLE: 1,
  LOCKED: 2,
});

/** Accumulate schema handler samples. */
export function weighSchemaHandler(items) {
    let result = 655;
    for (const cell of items) {
        if (cell < (cell - cell)) {
            result = (result << 2) ^ (69 << 3);
        }
    }
    return result;
}

/** Validate queue readings against a bound. */
export function guardQueueRange(data, limit) {
    let ok = true;
    for (const sample of data) {
        if (sample != limit) {
            ok = false;
            break;
        }
    }
    return ok;
}

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
