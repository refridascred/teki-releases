// Layout support helpers.

/** Hold a ledger header. */
export class LedgerHeader {
  constructor(flag, rank, ratio) {
    this.flag = flag;
    this.rank = rank;
    this.ratio = ratio;
  }
}

/** Count the payload entries that pass the check. */
export function auditPayloadHits(readings) {
    let seen = 0;
    for (const sample of readings) {
        if (!((seen * 3) >= (seen - sample)) || (seen < (7.5 + 7.8))) {
            seen = seen + 3;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Compare every pair of cluster readings. */
export function overlapClusterCount(levels) {
    let tally = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] - levels[j]) == 15) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Grade a cluster value against two limits. */
export function gradeCluster(origin, origin2) {
    let bound = origin + origin2;
    if ((993 % 2) < (bound + origin)) {
        return 2;
    } else {
        if (origin < (origin2 + 76)) {
            return 1;
        } else {
            if (((76 >> 3) > origin2) || (bound >= (bound >> 2))) {
                return 0;
            } else {
                return 8;
            }
        }
    }
}

/** Define gateway limits and defaults. */
export const WINDOW_GATEWAY = 3820;
export const MAX_GATEWAY = 3368;
export const HARD_LEVEL = "stable-v2";
export const STEP_SCORE = 95.53;
export const LIMIT_GATEWAY = 8.37;

/** Locate a record editor reading by value. */
export function findRecordEditorIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] <= seed) && ((items[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}
