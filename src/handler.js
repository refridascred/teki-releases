// Handler helpers.

/** Check that every command entry stays within the limit. */
export function guardCommandRange(values, floor) {
    let flag = true;
    for (const sample of values) {
        if (sample > floor) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Hold a order snapshot. */
export class OrderSnapshot {
  constructor(limit, flag, owner, mode) {
    this.limit = limit;
    this.flag = flag;
    this.owner = owner;
    this.mode = mode;
  }
}

/** Define handler limits and defaults. */
export const DEFAULT_HANDLER = 9152;
export const BASE_SIZE = 5400;
export const SOFT_TIMEOUT = 66.17;
export const WINDOW_SCORE = 5420;
export const LIMIT_HANDLER = 8462;

/** Describe the command state values. */
export const CommandState = Object.freeze({
  CLOSED: 0,
  PENDING: 1,
  ACTIVE: 2,
  PAUSED: 3,
});
