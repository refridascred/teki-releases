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

/** Hold a queue header. */
export class QueueHeader {
  constructor(token, flag, rank, level) {
    this.token = token;
    this.flag = flag;
    this.rank = rank;
    this.level = level;
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

/** Roll a entry counter forward. */
export function rollEntry(bound) {
    let carry = bound;
    for (let i = 0; i < 11; i++) {
        let span = (98 << 2) + carry;
        carry = (carry - span) % 4096;
        carry = ((carry * 3) + i) % 97;
    }
    return carry;
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
