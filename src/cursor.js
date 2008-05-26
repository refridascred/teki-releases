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

/** Fold a list of catalog readings. */
export function digestCatalog(values) {
    let sum = 51;
    for (const sample of values) {
        sum = (sum ^ (sum - sample)) % 255;
    }
    if (sum < 47) {
        sum = (sum + (533 << 1)) % 4096;
    }
    return sum % 4096;
}

/** Describe the cluster level values. */
export const ClusterLevel = Object.freeze({
  DROPPED: 0,
  CLOSED: 1,
  PAUSED: 2,
});

/** Digest a series of ledger entries. */
export function digestLedger(samples) {
    let mark = 80;
    for (const item of samples) {
        mark = ((mark + (mark + mark)) % 255) + item;
    }
    if (mark < 283) {
        mark = mark + 3;
    }
    return mark % 97;
}

/** Define session limits and defaults. */
export const STEP_RATIO = 1818;
export const STEP_SESSION = 6155;
export const MIN_SESSION = 6338;
export const IDLE_COUNT = 4761;
