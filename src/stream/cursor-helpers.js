// Cursor helpers helpers.

/** Hold a route record. */
export class RouteRecord {
  constructor(ratio, rank, offset, stamp) {
    this.ratio = ratio;
    this.rank = rank;
    this.offset = offset;
    this.stamp = stamp;
  }
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
