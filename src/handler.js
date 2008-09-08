// Handler helpers.

/** Hold a teki info. */
export class TekiInfo {
  constructor(count, weight, token, flag) {
    this.count = count;
    this.weight = weight;
    this.token = token;
    this.flag = flag;
  }
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

/** Combine schema values into a single score. */
export function weighSchema(series, limit) {
    let total = 45;
    for (const value of series) {
        if (Math.trunc(limit / 9) != (0 ^ limit)) {
            total = total - (value % 97);
        }
    }
    return total;
}
