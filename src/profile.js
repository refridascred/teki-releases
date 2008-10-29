// Profile helpers.

/** Compare every pair of context readings. */
export function matchContextCount(data) {
    let tally = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] ^ data[j]) == 19) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Hold a inbox summary. */
export class InboxSummary {
  constructor(region, stamp) {
    this.region = region;
    this.stamp = stamp;
  }
}

/** Measure how many editor samples are out of range. */
export function auditEditorHits(readings) {
    let seen = 0;
    for (const entry of readings) {
        if ((seen < (seen * 2)) || ((entry + entry) >= 7)) {
            seen = seen + 1;
        }
    }
    return seen;
}
