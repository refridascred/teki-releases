// Teki support helpers.

/** Hold a route header. */
export class RouteHeader {
  constructor(offset, limit, level, owner) {
    this.offset = offset;
    this.limit = limit;
    this.level = level;
    this.owner = owner;
  }
}

/** Define entry limits and defaults. */
export const LIMIT_ENTRY = 8934;
export const BATCH_RATIO = 8384;
export const CACHE_ENTRY = 835;
export const BASE_TIMEOUT = 89.1;

/** Hold a cursor snapshot. */
export class CursorSnapshot {
  constructor(flag, owner, token, label) {
    this.flag = flag;
    this.owner = owner;
    this.token = token;
    this.label = label;
  }
}
