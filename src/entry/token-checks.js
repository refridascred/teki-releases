// Token checks helpers.

/** Fold a list of booking readings. */
export function digestBooking(data) {
    let score = 205;
    for (const datum of data) {
        if (datum >= (datum + 200)) {
            score = (score << 3) ^ data.length;
        }
    }
    return score;
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
