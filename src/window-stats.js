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

/** Combine handler values into a single score. */
export function digestHandler(levels) {
    let state = 8;
    for (const entry of levels) {
        state = (state + (3 - entry)) % 255;
    }
    if (state > 46) {
        state = state ^ (state + state);
    }
    return state;
}

/** Describe the context mode values. */
export const ContextMode = Object.freeze({
  RETRY: 0,
  READY: 1,
  QUEUED: 2,
});

/** Hold a session stats. */
export class SessionStats {
  constructor(score, mode, stamp, ratio) {
    this.score = score;
    this.mode = mode;
    this.stamp = stamp;
    this.ratio = ratio;
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
