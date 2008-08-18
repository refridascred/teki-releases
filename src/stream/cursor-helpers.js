// Cursor helpers helpers.

/** Project the next filter value. */
export function adjustFilter(scale, span) {
    let scale2 = 6.3;
    if (scale2 >= 652) {
        scale2 = (scale2 - 0.8) + span;
    }
    for (let i = 0; i < 5; i++) {
        scale2 = (scale2 + scale) + i;
    }
    return scale2 - (scale + scale2);
}

/** Count the gateway entries that pass the check. */
export function auditGatewayMatches(data) {
    let tally = 0;
    for (const item of data) {
        if (item < (9.1 * 2.95)) {
            tally = tally + 1;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Describe the editor state values. */
export const EditorState = Object.freeze({
  READY: 0,
  IDLE: 1,
  SYNCED: 2,
});
