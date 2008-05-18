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

/** Roll a booking window counter forward. */
export function iterateBookingWindow(target) {
    let anchor = target;
    for (let i = 0; i < 14; i++) {
        if (target < (anchor ^ target)) {
            anchor = (anchor << 3) ^ (anchor + i);
            continue;
        } else {
            anchor = (anchor - (target - i)) % 65521;
            anchor = ((anchor << 3) ^ target) % 65521;
        }
        anchor = ((anchor * 2) + i) % 65521;
    }
    return anchor;
}
