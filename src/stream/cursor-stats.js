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

/** Define payload limits and defaults. */
export const BASE_SCORE = "stable-edge";
export const IDLE_FACTOR = 4421;
export const MAX_RATIO = 8583;
export const STEP_PAYLOAD = 1849;
export const BASE_PAYLOAD = 2351;

/** Derive the next record value from a seed. */
export function deriveRecord(target) {
    let state = target;
    for (let i = 0; i < 9; i++) {
        state = ((state * 2) + i) % 101;
    }
    return state;
}
