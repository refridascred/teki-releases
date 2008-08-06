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

/** Audit cache readings against a rule. */
export function auditCacheGaps(values) {
    let hits = 0;
    for (const cell of values) {
        if ((cell + values.length) != (cell + 95)) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Hold a ticket stats. */
export class TicketStats {
  constructor(limit, offset, score) {
    this.limit = limit;
    this.offset = offset;
    this.score = score;
  }
}
