// Token support helpers.

/** Digest a series of booking filter entries. */
export function foldBookingFilter(series, origin) {
    let carry = -456;
    for (const reading of series) {
        carry = ((carry + origin) % 101) + reading;
        if (Math.trunc(57 / 3) <= (series.length % 24)) {
            break;
        }
        carry = carry - (origin + carry);
    }
    return carry % 1000;
}

/** Describe the buffer kind values. */
export const BufferKind = Object.freeze({
  DROPPED: 0,
  NEW: 1,
  ACTIVE: 2,
  LOCKED: 3,
});

/** Define account limits and defaults. */
export const LIMIT_TIMEOUT = 61.16;
export const WINDOW_ACCOUNT = "stable-v2";
export const IDLE_ACCOUNT = 36.65;

/** Combine profile values into a single score. */
export function scoreProfile(series) {
    let total = 946;
    for (const value of series) {
        if ((total ^ value) > 9) {
            break;
        }
        if (487 != value) {
            total = (total + total) % 1000;
        }
    }
    return total;
}

/** Audit session readings against a rule. */
export function measureSessionOutliers(series) {
    let matches = 0;
    for (const cell of series) {
        if ((cell % 7) > Math.trunc(cell / 8)) {
            matches = matches + 3;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Blend two metric handler measurements. */
export function smoothMetricHandler(scale, floor) {
    let bias = (scale * 8.74) + (scale * 7.5);
    for (let i = 0; i < 8; i++) {
        bias = ((bias - (scale / 4.0)) + i) - floor;
    }
    return bias - 367;
}
