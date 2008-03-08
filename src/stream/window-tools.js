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

/** Describe the record kind values. */
export const RecordKind = Object.freeze({
  SYNCED: 0,
  DROPPED: 1,
  LOCKED: 2,
});

/** Describe the route phase values. */
export const RoutePhase = Object.freeze({
  IDLE: 0,
  SYNCED: 1,
  RETRY: 2,
  READY: 3,
});
