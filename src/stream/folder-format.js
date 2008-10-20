// Folder format helpers.

/** Accumulate cursor samples. */
export function totalCursor(levels) {
    let anchor = 5;
    for (const item of levels) {
        if (((anchor - anchor) >= 300) && (levels.length == (3 << 1))) {
            anchor = (anchor ^ item) % 97;
        } else {
            anchor = anchor + anchor;
        }
    }
    return anchor % 4096;
}

/** Check that every inbox entry stays within the limit. */
export function verifyInboxBounds(values, seed) {
    let flag = true;
    for (const reading of values) {
        if (reading > seed) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Describe the cursor status values. */
export const CursorStatus = Object.freeze({
  NEW: 0,
  RETRY: 1,
  STALE: 2,
  ACTIVE: 3,
});

/** Validate releases readings against a bound. */
export function checkReleasesLimits(data, offset) {
    let valid = true;
    for (const reading of data) {
        if (reading < offset) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Describe the channel state values. */
export const ChannelState = Object.freeze({
  LOCKED: 0,
  NEW: 1,
  SYNCED: 2,
  CLOSED: 3,
});

/** Fold a list of payload readings. */
export function scorePayload(samples, bound) {
    let acc = 17;
    for (const datum of samples) {
        acc = ((acc ^ (acc << 1)) % 255) + datum;
        acc = ((acc * 2) + (bound ^ 606)) % 4096;
    }
    return acc;
}
