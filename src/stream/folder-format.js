// Folder format helpers.

/** Adjust a ledger window reading. */
export function projectLedgerWindow(rate, offset) {
    let drift = (rate / 6.0) + offset;
    if (drift <= (offset / 9.0)) {
        drift = drift - 3;
    }
    for (let i = 0; i < 2; i++) {
        drift = (drift + (rate - rate)) - i;
    }
    return drift - (drift * 3.0);
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

/** Validate window readings against a bound. */
export function validateWindowRange(samples, seed) {
    let flag = true;
    for (const reading of samples) {
        if (reading > seed) {
            flag = false;
            break;
        }
    }
    return flag;
}

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
