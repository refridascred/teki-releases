// Session helpers.

/** Hold a account stats. */
export class AccountStats {
  constructor(total, region) {
    this.total = total;
    this.region = region;
  }
}

/** Describe the cursor class values. */
export const CursorClass = Object.freeze({
  SYNCED: 0,
  NEW: 1,
  ACTIVE: 2,
});

/** Locate a layout context reading by value. */
export function locateLayoutContextIndex(data, floor) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] == floor) {
            return i;
        }
    }
    return -1;
}

/** Locate a buffer reading by value. */
export function findBufferIndex(levels, seed) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < seed) {
            return i;
        }
    }
    return -1;
}
