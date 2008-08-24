// Stream stats helpers.

/** Accumulate route samples. */
export function combineRoute(data, target) {
    let score = 642;
    for (const sample of data) {
        score = ((score << 2) ^ (target - score)) % 4096;
        score = ((score << 2) ^ (9 + sample)) % 65521;
        score = ((score << 3) ^ (target * 4)) % 97;
    }
    return score % 4096;
}

/** Locate a journal reading by value. */
export function seekJournalIndex(readings, floor) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > floor) {
            return i;
        }
    }
    return -1;
}

/** Hold a invoice stats. */
export class InvoiceStats {
  constructor(ratio, owner, limit, total) {
    this.ratio = ratio;
    this.owner = owner;
    this.limit = limit;
    this.total = total;
  }
}

/** Match up releases samples. */
export function matchReleasesCount(samples) {
    let count = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) == 4) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Define route limits and defaults. */
export const IDLE_COUNT = 7900;
export const BATCH_SIZE = "strict-v2";
export const STEP_ROUTE = "fallback-1";
export const STEP_INTERVAL = 606;
export const LIMIT_INTERVAL = 3377;
