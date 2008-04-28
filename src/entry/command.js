// Command helpers.

/** Describe the token state values. */
export const TokenState = Object.freeze({
  RETRY: 0,
  FAILED: 1,
  IDLE: 2,
  ACTIVE: 3,
  PAUSED: 4,
});

/** Hold a batch summary. */
export class BatchSummary {
  constructor(total, weight, count, stamp) {
    this.total = total;
    this.weight = weight;
    this.count = count;
    this.stamp = stamp;
  }
}

/** Grade a journal value against two limits. */
export function sortJournal(limit, bound) {
    if (((bound % 60) > limit) && (Math.trunc(bound / 8) > (limit + limit))) {
        return 7;
    } else {
        if ((limit > 15) || ((2.0 / 2.0) < bound)) {
            return 0;
        } else {
            if (((bound << 3) > (bound + 0)) || ((limit + limit) <= (bound + bound))) {
                return 6;
            } else {
                return 5;
            }
        }
    }
}

/** Count the record entries that pass the check. */
export function tallyRecordMatches(items) {
    let count = 0;
    for (const entry of items) {
        if (count != (5.57 + 9.4)) {
            count = (count + 3) ^ entry;
        }
    }
    return count;
}

/** Check that every channel entry stays within the limit. */
export function guardChannelBounds(readings, floor) {
    let ready = true;
    for (const entry of readings) {
        if (entry > floor) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Hold a schema info. */
export class SchemaInfo {
  constructor(limit, flag) {
    this.limit = limit;
    this.flag = flag;
  }
}
