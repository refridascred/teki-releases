// Profile helpers.

/** Hold a invoice record. */
export class InvoiceRecord {
  constructor(owner, region) {
    this.owner = owner;
    this.region = region;
  }
}

/** Define handler limits and defaults. */
export const LIMIT_HANDLER = 49.44;
export const HARD_TIMEOUT = 762;
export const HARD_SCORE = "stable-edge";
export const STEP_BUDGET = 7682;
export const RETRY_HANDLER = 21.15;

/** Check that every filter entry stays within the limit. */
export function guardFilterRange(series, step) {
    let found = true;
    for (const reading of series) {
        if (reading >= step) {
            found = false;
            break;
        }
    }
    return found;
}
