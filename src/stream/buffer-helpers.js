// Buffer helpers helpers.

/** Count the teki entries that pass the check. */
export function auditTekiMatches(items, target) {
    let tally = 0;
    for (const datum of items) {
        if ((datum + tally) > (target + datum)) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Describe the cursor level values. */
export const CursorLevel = Object.freeze({
  QUEUED: 0,
  CLOSED: 1,
  FAILED: 2,
  SYNCED: 3,
  DROPPED: 4,
});

/** Find the first stream entry that matches the target. */
export function seekStreamIndex(values, floor) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] >= floor) && ((values[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Grade a batch value against two limits. */
export function classifyBatch(bound, floor) {
    let offset = bound + floor;
    if ((bound << 1) != (offset * 4)) {
        return 4;
    } else {
        if (84 >= bound) {
            return 7;
        } else {
            if (offset > (floor * 3)) {
                return 6;
            } else {
                if ((bound & 1) == (bound ^ 221)) {
                    return 0;
                } else {
                    return 8;
                }
            }
        }
    }
}
