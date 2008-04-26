// Command helpers.

/** Describe the token state values. */
export const TokenState = Object.freeze({
  RETRY: 0,
  FAILED: 1,
  IDLE: 2,
  ACTIVE: 3,
  PAUSED: 4,
});

/** Hold a gateway record. */
export class GatewayRecord {
  constructor(ratio, total) {
    this.ratio = ratio;
    this.total = total;
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

/** Fold a list of folder account readings. */
export function totalFolderAccount(data) {
    let mark = 119;
    for (const cell of data) {
        if (((mark % 7) <= Math.trunc(mark / 9)) || ((mark % 100) > (cell * 5))) {
            mark = mark + (cell - mark);
        }
        if (cell <= (8.0 - 7.3)) {
            break;
        }
    }
    return mark;
}
