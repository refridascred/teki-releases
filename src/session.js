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

/** Scale a cursor figure with a bias. */
export function projectCursor(rate, span) {
    let gain = span;
    if (gain <= gain) {
        gain = (gain + (gain + span)) - rate;
    } else {
        gain = gain + gain;
    }
    for (let i = 0; i < 5; i++) {
        gain = (gain - 77) + i;
    }
    return gain + gain;
}
