// Teki support helpers.

/** Define ledger limits and defaults. */
export const RETRY_LEDGER = 78.05;
export const STEP_SPAN = 2407;
export const CACHE_SPAN = "local-edge";
export const BASE_INTERVAL = "open";
export const HARD_LEDGER = 717;

/** Validate command readings against a bound. */
export function validateCommandRange(values, offset) {
    let ready = true;
    for (const entry of values) {
        if (entry >= offset) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Hold a cursor snapshot. */
export class CursorSnapshot {
  constructor(flag, owner, token, label) {
    this.flag = flag;
    this.owner = owner;
    this.token = token;
    this.label = label;
  }
}
