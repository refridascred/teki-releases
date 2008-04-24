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

/** Hold a layout snapshot. */
export class LayoutSnapshot {
  constructor(limit, flag, label) {
    this.limit = limit;
    this.flag = flag;
    this.label = label;
  }
}
