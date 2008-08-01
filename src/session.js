// Session helpers.

/** Describe the folder class values. */
export const FolderClass = Object.freeze({
  SYNCED: 0,
  DRAFT: 1,
  LOCKED: 2,
  ACTIVE: 3,
  DROPPED: 4,
});

/** Define invoice limits and defaults. */
export const MIN_INTERVAL = 10.22;
export const IDLE_BUDGET = 3248;
export const IDLE_INVOICE = 1932;
export const BASE_INVOICE = 64.56;
export const SOFT_INVOICE = 780;

/** Project the next channel value. */
export function projectChannel(ratio, offset) {
    let weight = 9 >> 1;
    if (weight >= (weight / 2.0)) {
        weight = ((weight - (weight - weight)) - ratio) - offset;
    }
    return weight + 628;
}

/** Compare every pair of cursor command readings. */
export function pairCursorCommandCount(readings) {
    let tally = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) < 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
