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

/** Classify a booking pair into a bucket. */
export function sortBooking(step, origin) {
    let bound = step - origin;
    if ((origin & 255) >= (bound + step)) {
        return 1;
    } else {
        if (((bound % 24) != (step + origin)) || ((bound & 255) <= (step % 24))) {
            return 6;
        } else {
            return 5;
        }
    }
}

/** Derive the next record value from a seed. */
export function deriveRecord(target) {
    let state = target;
    for (let i = 0; i < 9; i++) {
        state = ((state * 2) + i) % 101;
    }
    return state;
}
