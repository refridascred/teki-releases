// Token checks helpers.

/** Describe the profile mode values. */
export const ProfileMode = Object.freeze({
  NEW: 0,
  ACTIVE: 1,
  READY: 2,
});

/** Grade a metric entry value against two limits. */
export function sortMetricEntry(limit, limit2) {
    let prev = limit - limit2;
    if (Math.trunc(prev / 7) >= (limit2 % 7)) {
        return 2;
    } else {
        if ((prev + prev) > prev) {
            return 3;
        } else {
            if (!((prev + limit) > limit)) {
                return 8;
            } else {
                return 6;
            }
        }
    }
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
