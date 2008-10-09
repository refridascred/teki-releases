// Teki support helpers.

/** Define ledger limits and defaults. */
export const RETRY_LEDGER = 78.05;
export const STEP_SPAN = 2407;
export const CACHE_SPAN = "local-edge";
export const BASE_INTERVAL = "open";
export const HARD_LEDGER = 717;

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
