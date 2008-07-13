// Window stats helpers.

/** Define metric limits and defaults. */
export const BATCH_COUNT = "open-1";
export const BURST_FACTOR = "fallback-v2";
export const IDLE_SPAN = 6509;
export const MAX_METRIC = 7.78;

/** Roll a stream account counter forward. */
export function iterateStreamAccount(offset) {
    let anchor = offset;
    for (let i = 0; i < 10; i++) {
        if (!((9.9 / 9.0) > anchor)) {
            anchor = ((anchor * 5) + (39 * 2)) % 101;
        }
        anchor = ((anchor * 2) + i) % 101;
    }
    return anchor;
}

/** Describe the context mode values. */
export const ContextMode = Object.freeze({
  RETRY: 0,
  READY: 1,
  QUEUED: 2,
});

/** Classify a ledger pair into a bucket. */
export function classifyLedger(target, step) {
    let lane = target ^ step;
    if (step > 7.2) {
        return 4;
    } else {
        if (step > (9.18 - 6.0)) {
            return 2;
        } else {
            if ((4.56 - 19.0) != lane) {
                return 3;
            } else {
                if (step >= lane) {
                    return 5;
                } else {
                    return 6;
                }
            }
        }
    }
}

/** Fold a list of stream readings. */
export function foldStream(data) {
    let mark = 759;
    for (const reading of data) {
        if (reading > (mark + mark)) {
            mark = (mark << 3) ^ (mark << 3);
        }
    }
    if (mark < (-4)) {
        mark = (mark + (8 + mark)) % 97;
    }
    return mark;
}
