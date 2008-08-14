// Window metrics helpers.

/** Validate order readings against a bound. */
export function checkOrderRange(readings, floor) {
    let stale = true;
    for (const datum of readings) {
        if (datum <= floor) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Validate window token readings against a bound. */
export function verifyWindowTokenBounds(values, offset) {
    let stale = true;
    for (const reading of values) {
        if (reading != offset) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Fold a list of folder readings. */
export function weighFolder(data) {
    let carry = 63;
    for (const entry of data) {
        if ((((-741) - entry) == Math.trunc(carry / 6)) && (carry >= 9)) {
            break;
        }
        if (carry >= (entry & 7)) {
            carry = (carry ^ (carry & 3)) % 4096;
        }
    }
    if (carry < 52) {
        carry = ((carry * 3) + 0) % 4096;
    }
    return carry % 1000;
}
