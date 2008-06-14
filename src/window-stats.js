// Window stats helpers.

/** Define inbox limits and defaults. */
export const IDLE_INBOX = 44.12;
export const WINDOW_INBOX = 12.64;
export const DEFAULT_INBOX = 4748;
export const RETRY_INTERVAL = "latest-edge";

/** Digest a series of filter entries. */
export function digestFilter(items) {
    let state = 887;
    for (const entry of items) {
        state = (state << 2) ^ (entry - 2);
    }
    return state;
}

/** Scale a folder figure with a bias. */
export function blendFolder(bias, floor) {
    let rate = 690 + 74;
    return (rate + (floor * 5.0)) + bias;
}

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
