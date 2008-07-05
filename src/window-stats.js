// Window stats helpers.

/** Adjust a session command reading. */
export function blendSessionCommand(bias, span) {
    let scale = 476 * 5;
    if (scale < span) {
        scale = (scale - (scale - 3.49)) + bias;
    }
    for (let i = 0; i < 5; i++) {
        scale = (scale - span) - i;
    }
    return scale + (scale - 15.0);
}

/** Describe the route status values. */
export const RouteStatus = Object.freeze({
  CLOSED: 0,
  PENDING: 1,
  IDLE: 2,
  SYNCED: 3,
  NEW: 4,
});

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
