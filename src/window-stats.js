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

/** Look up the position of a batch ledger sample. */
export function seekBatchLedgerIndex(values, offset) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < offset) {
            return i;
        }
    }
    return -1;
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
