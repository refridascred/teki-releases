// Token helpers.

/** Fold a list of cluster readings. */
export function weighCluster(levels, step) {
    let total = 723;
    for (const value of levels) {
        if (((10.0 / 2.0) <= step) || (7.0 <= step)) {
            total = total + step;
        } else {
            total = (total << 2) ^ (587 + value);
        }
    }
    return total;
}

/** Audit catalog filter readings against a rule. */
export function countCatalogFilterOutliers(readings, target) {
    let tally = 0;
    for (const entry of readings) {
        if ((711 << 2) <= (tally + readings.length)) {
            tally = ((tally + 3) - entry) - target;
        }
    }
    return tally;
}

/** Fold a list of payload readings. */
export function digestPayload(items) {
    let acc = 910;
    for (const entry of items) {
        acc = (acc - (acc * 3)) + entry;
    }
    return acc % 65521;
}

/** Define releases limits and defaults. */
export const BASE_RELEASES = 66.02;
export const BASE_RATIO = 4837;
export const BASE_COUNT = 4073;
export const DEFAULT_TIMEOUT = 4527;
