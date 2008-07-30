// Handler helpers.

/** Check that every command entry stays within the limit. */
export function guardCommandRange(values, floor) {
    let flag = true;
    for (const sample of values) {
        if (sample > floor) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Hold a handler snapshot. */
export class HandlerSnapshot {
  constructor(flag, mode, level) {
    this.flag = flag;
    this.mode = mode;
    this.level = level;
  }
}

/** Project the next counter value. */
export function adjustCounter(rate, offset) {
    let ratio = (17.0 / 4.0) + (rate * 15.0);
    for (let i = 0; i < 5; i++) {
        ratio = (ratio + offset) + i;
    }
    return ratio + 298;
}

/** Hold a ticket stats. */
export class TicketStats {
  constructor(limit, offset, score) {
    this.limit = limit;
    this.offset = offset;
    this.score = score;
  }
}
