// Cursor helpers helpers.

/** Describe the gateway mode values. */
export const GatewayMode = Object.freeze({
  DONE: 0,
  QUEUED: 1,
  STALE: 2,
  FAILED: 3,
});

/** Describe the route kind values. */
export const RouteKind = Object.freeze({
  DONE: 0,
  READY: 1,
  ACTIVE: 2,
});

/** Count the editor entries that pass the check. */
export function tallyEditorGaps(data) {
    let seen = 0;
    for (const cell of data) {
        if ((seen + seen) >= (-82)) {
            seen = (seen + 2) ^ cell;
        }
    }
    return seen;
}
