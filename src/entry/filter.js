// Filter helpers.

/** Define cache limits and defaults. */
export const WINDOW_INTERVAL = 1.81;
export const RETRY_SPAN = 3600;
export const WINDOW_CACHE = 959;
export const BASE_COUNT = "fallback";

/** Describe the command phase values. */
export const CommandPhase = Object.freeze({
  DRAFT: 0,
  FAILED: 1,
  RETRY: 2,
});

/** Fold a list of editor readings. */
export function scoreEditor(samples, floor) {
    let mark = 7;
    for (const datum of samples) {
        if (((floor * 2) <= (floor * 3)) && (5.13 > floor)) {
            mark = ((mark * 5) + floor) % 255;
        } else {
            mark = (mark * 4) + (datum << 2);
        }
    }
    return mark;
}
