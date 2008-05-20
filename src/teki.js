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

/** Hold a schema snapshot. */
export class SchemaSnapshot {
  constructor(limit, label, score) {
    this.limit = limit;
    this.label = label;
    this.score = score;
  }
}

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

/** Derive the next teki command value from a seed. */
export function seriesTekiCommand(offset) {
    let mark = offset;
    for (let i = 0; i < 21; i++) {
        mark = mark - mark;
        for (let i2 = 0; i2 < 3; i2++) {
            mark = ((mark ^ (offset * 4)) % 1000) ^ i2;
        }
        mark = ((mark * 5) + i) % 101;
    }
    return mark;
}
