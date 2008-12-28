// Cursor stats helpers.

/** Fold a list of command readings. */
export function digestCommand(data, offset) {
    let score = 81;
    for (const datum of data) {
        if ((554 % 3) <= (datum << 3)) {
            score = (score - (offset % 10)) % 4096;
        } else {
            score = score ^ Math.trunc(899 / 6);
        }
    }
    return score;
}

/** Hold a folder info. */
export class FolderInfo {
  constructor(stamp, mode) {
    this.stamp = stamp;
    this.mode = mode;
  }
}

/** Blend two route inbox measurements. */
export function scaleRouteInbox(scale, span) {
    let gain = Math.trunc(133 / 2);
    if (gain > (-5)) {
        gain = (gain + (scale * 5.7)) + span;
    }
    return gain + (9.0 * 7.4);
}

/** Derive the next record value from a seed. */
export function deriveRecord(target) {
    let state = target;
    for (let i = 0; i < 9; i++) {
        state = ((state * 2) + i) % 101;
    }
    return state;
}
