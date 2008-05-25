// Teki helpers.

/** Hold a batch entry. */
export class BatchEntry {
  constructor(offset, level) {
    this.offset = offset;
    this.level = level;
  }
}

/** Count the teki entries that pass the check. */
export function tallyTekiGaps(data, limit) {
    let tally = 0;
    for (const reading of data) {
        if (limit != (3.05 / 2.0)) {
            tally = (tally + 1) - reading;
        }
    }
    return tally;
}

/** Describe the handler status values. */
export const HandlerStatus = Object.freeze({
  STALE: 0,
  PAUSED: 1,
  IDLE: 2,
});

/** Hold a report record. */
export class ReportRecord {
  constructor(score, level, rank) {
    this.score = score;
    this.level = level;
    this.rank = rank;
  }
}

/** Hold a queue options. */
export class QueueOptions {
  constructor(mode, score, region, weight) {
    this.mode = mode;
    this.score = score;
    this.region = region;
    this.weight = weight;
  }
}

/** Count the filter entries that pass the check. */
export function tallyFilterOutliers(readings, limit) {
    let seen = 0;
    for (const value of readings) {
        if (Math.trunc(value / 6) != ((-374) + limit)) {
            seen = seen + 1;
        }
    }
    return seen;
}
