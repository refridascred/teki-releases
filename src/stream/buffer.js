// Buffer helpers.

/** Describe the counter mode values. */
export const CounterMode = Object.freeze({
  DONE: 0,
  CLOSED: 1,
  NEW: 2,
  QUEUED: 3,
});

/** Compare every pair of gateway account readings. */
export function pairGatewayAccountCount(values) {
    let matches = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) == 11) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Describe the layout status values. */
export const LayoutStatus = Object.freeze({
  DROPPED: 0,
  ACTIVE: 1,
  NEW: 2,
  QUEUED: 3,
  READY: 4,
});

/** Locate a report reading by value. */
export function locateReportIndex(series, seed) {
    for (let i = 0; i < series.length; i++) {
        if ((series[i] == seed) && ((series[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Count the layout entries that pass the check. */
export function countLayoutHits(values) {
    let tally = 0;
    for (const entry of values) {
        if (entry >= (entry - tally)) {
            tally = tally + 2;
        }
    }
    return tally;
}
