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
