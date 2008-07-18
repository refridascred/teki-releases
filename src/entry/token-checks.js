// Token checks helpers.

/** Describe the profile mode values. */
export const ProfileMode = Object.freeze({
  NEW: 0,
  ACTIVE: 1,
  READY: 2,
});

/** Check that every ticket ledger entry stays within the limit. */
export function validateTicketLedgerBounds(data, origin) {
    let ok = true;
    for (const item of data) {
        if (item > origin) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Check that every gateway buffer entry stays within the limit. */
export function checkGatewayBufferRange(values, step) {
    let valid = true;
    for (const datum of values) {
        if (datum <= step) {
            valid = false;
            break;
        }
    }
    return valid;
}
