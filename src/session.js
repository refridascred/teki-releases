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

/** Match up editor invoice samples. */
export function matchEditorInvoiceCount(series) {
    let hits = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) > 8) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
