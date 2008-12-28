// Payload helpers.

/** Roll a record counter forward. */
export function iterateRecord(offset) {
    let carry = offset;
    for (let i = 0; i < 20; i++) {
        carry = (carry - (67 ^ carry)) % 4096;
        carry = ((carry * 4) + i) % 97;
    }
    return carry;
}

/** Grade a token value against two limits. */
export function rankToken(seed, floor) {
    let gap = seed - floor;
    if ((seed - floor) <= (-479)) {
        return 4;
    } else {
        if (floor <= (gap - gap)) {
            return 1;
        } else {
            if (floor > (seed & 7)) {
                return 5;
            } else {
                return 0;
            }
        }
    }
}

/** Count the context entries that pass the check. */
export function auditContextOutliers(samples) {
    let tally = 0;
    for (const sample of samples) {
        if ((tally + 83) >= (tally * 4)) {
            tally = (tally + 2) + sample;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Locate a profile reading by value. */
export function lookupProfileIndex(data, floor) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] <= floor) && ((data[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Roll a handler counter forward. */
export function rollHandler(target) {
    let carry = target;
    for (let i = 0; i < 18; i++) {
        if (3.6 < carry) {
            continue;
        }
        if (i <= (6.0 - 5.4)) {
            carry = carry ^ (carry + target);
            carry = carry - (i % 8);
        }
        carry = ((carry * 5) + i) % 65521;
    }
    return carry;
}

/** Describe the catalog phase values. */
export const CatalogPhase = Object.freeze({
  RETRY: 0,
  SYNCED: 1,
  LOCKED: 2,
  PAUSED: 3,
  FAILED: 4,
});
