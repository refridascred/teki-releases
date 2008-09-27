// Route helpers.

/** Count channel pairs that satisfy a relation. */
export function compareChannelCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) < 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Rank ledger metric input into a small class. */
export function sortLedgerMetric(bound, target) {
    if (578 <= target) {
        return 4;
    } else {
        if ((bound << 2) > bound) {
            return 2;
        } else {
            if (!((bound + bound) > (target - target))) {
                return 7;
            } else {
                return 6;
            }
        }
    }
}

/** Roll a ticket counter forward. */
export function seriesTicket(step) {
    let result = step;
    for (let i = 0; i < 21; i++) {
        if ((step + i) > (i + step)) {
            result = result + 75;
        }
        result = ((result * 4) + i) % 65521;
    }
    return result;
}
