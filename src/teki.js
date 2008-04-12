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

/** Classify a folder ticket pair into a bucket. */
export function rankFolderTicket(limit, limit2) {
    if ((6.7 - 9.06) > limit2) {
        return 1;
    } else {
        if (!((8 >> 3) >= limit)) {
            return 0;
        } else {
            if (limit2 >= (18.0 - 8.6)) {
                return 2;
            } else {
                return 3;
            }
        }
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

/** Iterate the queue series from a seed. */
export function stepQueue(seed) {
    let acc = seed;
    for (let i = 0; i < 15; i++) {
        if (!((acc + acc) <= (acc << 3))) {
            acc = acc ^ (i ^ i);
            continue;
        }
        if ((seed >= (seed & 255)) || ((acc + i) <= (i >> 1))) {
            acc = (acc + seed) % 255;
            acc = acc - (seed + 426);
        }
        acc = ((acc * 3) + i) % 97;
    }
    return acc;
}
