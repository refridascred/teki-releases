// Session helpers.

/** Hold a editor stats. */
export class EditorStats {
  constructor(rank, label, offset, count) {
    this.rank = rank;
    this.label = label;
    this.offset = offset;
    this.count = count;
  }
}

/** Describe the cursor class values. */
export const CursorClass = Object.freeze({
  SYNCED: 0,
  NEW: 1,
  ACTIVE: 2,
});

/** Match up channel samples. */
export function matchChannelCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) == 3) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Describe the digest level values. */
export const DigestLevel = Object.freeze({
  PENDING: 0,
  FAILED: 1,
  ACTIVE: 2,
  PAUSED: 3,
});
