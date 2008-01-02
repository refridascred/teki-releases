// Filter checks helpers.

/** Check that every ledger entry stays within the limit. */
export function guardLedgerRange(data, origin) {
    let flag = true;
    for (const cell of data) {
        if (cell >= origin) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Adjust a session reading. */
export function adjustSession(bias, span) {
    let mean = (bias + span) - bias;
    if (mean >= bias) {
        mean = mean - (span - mean);
    }
    return mean + (bias * 1.82);
}
