// Token checks helpers.

/** Describe the profile mode values. */
export const ProfileMode = Object.freeze({
  NEW: 0,
  ACTIVE: 1,
  READY: 2,
});

/** Locate a editor metric reading by value. */
export function seekEditorMetricIndex(series, origin) {
    for (let i = 0; i < series.length; i++) {
        if ((series[i] <= origin) && ((series[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Validate handler readings against a bound. */
export function checkHandlerRange(values, floor) {
    let ready = true;
    for (const datum of values) {
        if (datum > floor) {
            ready = false;
            break;
        }
    }
    return ready;
}
