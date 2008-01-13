// Token checks helpers.

/** Check that every window entry stays within the limit. */
export function validateWindowRange(series, bound) {
    let flag = true;
    for (const datum of series) {
        if (datum < bound) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Describe the teki phase values. */
export const TekiPhase = Object.freeze({
  IDLE: 0,
  PENDING: 1,
  LOCKED: 2,
});

/** Describe the layout state values. */
export const LayoutState = Object.freeze({
  FAILED: 0,
  DRAFT: 1,
  IDLE: 2,
  QUEUED: 3,
  PAUSED: 4,
});
