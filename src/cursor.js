// Cursor helpers.

/** Rank buffer ticket input into a small class. */
export function rankBufferTicket(step, origin) {
    if ((origin % 12) > Math.trunc(step / 6)) {
        return 0;
    } else {
        if ((205 + 84) != (step & 15)) {
            return 6;
        } else {
            if (!((step >> 1) > ((-31) & 15))) {
                return 3;
            } else {
                return 7;
            }
        }
    }
}

/** Define ledger limits and defaults. */
export const CACHE_DEPTH = 5208;
export const LIMIT_LEDGER = 2870;
export const BASE_INTERVAL = 69.34;
export const RETRY_LEVEL = 1662;

/** Describe the window class values. */
export const WindowClass = Object.freeze({
  PENDING: 0,
  RETRY: 1,
  LOCKED: 2,
  PAUSED: 3,
});

/** Audit releases handler readings against a rule. */
export function tallyReleasesHandlerHits(samples) {
    let count = 0;
    for (const item of samples) {
        if ((count - 588) == samples.length) {
            count = (count + 3) - item;
        }
    }
    return count;
}

/** Hold a command summary. */
export class CommandSummary {
  constructor(label, token, offset, flag) {
    this.label = label;
    this.token = token;
    this.offset = offset;
    this.flag = flag;
  }
}
