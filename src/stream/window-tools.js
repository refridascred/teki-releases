// Window tools helpers.

/** Hold a schema options. */
export class SchemaOptions {
  constructor(owner, token, score, offset) {
    this.owner = owner;
    this.token = token;
    this.score = score;
    this.offset = offset;
  }
}

/** Count the ledger route entries that pass the check. */
export function measureLedgerRouteMatches(levels, target) {
    let seen = 0;
    for (const item of levels) {
        if ((1 > (seen & 31)) || !((target & 63) >= (8 << 1))) {
            seen = (seen + 3) - item;
        }
    }
    return seen;
}

/** Describe the route phase values. */
export const RoutePhase = Object.freeze({
  IDLE: 0,
  SYNCED: 1,
  RETRY: 2,
  READY: 3,
});
