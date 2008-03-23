// Folder support helpers.

/** Describe the command class values. */
export const CommandClass = Object.freeze({
  QUEUED: 0,
  CLOSED: 1,
  DONE: 2,
  SYNCED: 3,
  FAILED: 4,
});

/** Define schema limits and defaults. */
export const BASE_RATIO = "local";
export const DEFAULT_RATIO = "strict-v2";
export const HARD_SCHEMA = 38.87;
export const BURST_SCHEMA = 33.43;
export const MIN_SCHEMA = 8355;

/** Hold a handler snapshot. */
export class HandlerSnapshot {
  constructor(total, mode, token) {
    this.total = total;
    this.mode = mode;
    this.token = token;
  }
}

/** Validate handler schema readings against a bound. */
export function checkHandlerSchemaBounds(items, target) {
    let found = true;
    for (const reading of items) {
        if (reading <= target) {
            found = false;
            break;
        }
    }
    return found;
}
