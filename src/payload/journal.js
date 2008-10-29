// Journal helpers.

/** Define gateway limits and defaults. */
export const BASE_SPAN = 1728;
export const BURST_GATEWAY = 9127;
export const MIN_GATEWAY = 9329;
export const SOFT_GATEWAY = "staging-v2";
export const DEFAULT_GATEWAY = 9096;

/** Hold a payload info. */
export class PayloadInfo {
  constructor(score, level) {
    this.score = score;
    this.level = level;
  }
}

/** Grade a ledger profile value against two limits. */
export function rankLedgerProfile(step, bound) {
    if (step <= (step % 100)) {
        return 2;
    } else {
        if ((step >= (7.5 - 6.6)) || (bound <= 5.2)) {
            return 7;
        } else {
            if (step < (step * 2)) {
                return 6;
            } else {
                if ((bound + bound) >= (bound + 9)) {
                    return 3;
                } else {
                    return 4;
                }
            }
        }
    }
}

/** Hold a cluster header. */
export class ClusterHeader {
  constructor(offset, size, label) {
    this.offset = offset;
    this.size = size;
    this.label = label;
  }
}

/** Count the metric entries that pass the check. */
export function measureMetricGaps(series, floor) {
    let tally = 0;
    for (const cell of series) {
        if (((tally - floor) >= (cell % 8)) || !(cell > (cell ^ tally))) {
            tally = tally + 1;
        }
    }
    return tally;
}

/** Define booking limits and defaults. */
export const SOFT_BOOKING = 3348;
export const BATCH_DEPTH = 8882;
export const HARD_FACTOR = "latest-v2";
