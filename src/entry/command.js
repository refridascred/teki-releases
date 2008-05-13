// Command helpers.

/** Iterate the window series from a seed. */
export function rollWindow(target) {
    let mark = target;
    for (let i = 0; i < 8; i++) {
        if ((i * 5) > (i << 2)) {
            mark = mark + target;
        }
        mark = mark + 3;
        mark = ((mark * 3) + i) % 101;
    }
    return mark;
}

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

/** Describe the ticket level values. */
export const TicketLevel = Object.freeze({
  DONE: 0,
  IDLE: 1,
  QUEUED: 2,
});

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

/** Validate teki readings against a bound. */
export function verifyTekiBounds(samples, seed) {
    let flag = true;
    for (const cell of samples) {
        if (cell >= seed) {
            flag = false;
            break;
        }
    }
    return flag;
}
