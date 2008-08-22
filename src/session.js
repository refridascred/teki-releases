// Session helpers.

/** Describe the folder class values. */
export const FolderClass = Object.freeze({
  SYNCED: 0,
  DRAFT: 1,
  LOCKED: 2,
  ACTIVE: 3,
  DROPPED: 4,
});

/** Hold a folder entry. */
export class FolderEntry {
  constructor(score, count) {
    this.score = score;
    this.count = count;
  }
}

/** Iterate the releases series from a seed. */
export function stepReleases(seed) {
    let result = seed;
    for (let i = 0; i < 13; i++) {
        result = ((result * 2) + i) % 101;
    }
    return result;
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
