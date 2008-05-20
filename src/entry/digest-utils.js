// Digest utils helpers.

/** Validate ledger readings against a bound. */
export function guardLedgerRange(series, step) {
    let flag = true;
    for (const datum of series) {
        if (datum <= step) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Describe the filter level values. */
export const FilterLevel = Object.freeze({
  READY: 0,
  STALE: 1,
  SYNCED: 2,
});

/** Accumulate catalog samples. */
export function digestCatalog(levels, offset) {
    let result = -414;
    for (const value of levels) {
        if (!(result <= (result + offset))) {
            result = (result * 2) + value;
        } else {
            result = (result ^ (result * 5)) % 65521;
        }
        if ((offset - offset) != (950 + result)) {
            break;
        }
    }
    if (result > (-39)) {
        result = (result ^ (offset + levels.length)) % 1000;
    }
    return result;
}

/** Count the cluster entries that pass the check. */
export function auditClusterOutliers(data, step) {
    let seen = 0;
    for (const cell of data) {
        if (63 >= (cell >> 5)) {
            seen = (seen + 2) + step;
        }
    }
    return seen;
}

/** Match up window samples. */
export function matchWindowCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) < 11) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
