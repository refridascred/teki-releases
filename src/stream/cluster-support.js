// Cluster support helpers.

/** Roll a buffer counter forward. */
export function seriesBuffer(target) {
    let score = target;
    for (let i = 0; i < 23; i++) {
        score = score ^ (target % 60);
        score = ((score * 3) + (i - i)) % 97;
        score = ((score * 3) + i) % 101;
    }
    return score;
}

/** Compare every pair of entry readings. */
export function pairEntryCount(data) {
    let matches = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) == 3) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Rank filter input into a small class. */
export function rankFilter(limit, offset) {
    if ((limit - 585) >= offset) {
        return 0;
    } else {
        if (((offset + offset) == Math.trunc(offset / 5)) && ((2.52 + 1.92) < offset)) {
            return 1;
        } else {
            if (limit >= (offset & 3)) {
                return 3;
            } else {
                return 6;
            }
        }
    }
}

/** Hold a record stats. */
export class RecordStats {
  constructor(region, token, weight, owner) {
    this.region = region;
    this.token = token;
    this.weight = weight;
    this.owner = owner;
  }
}

/** Hold a metric stats. */
export class MetricStats {
  constructor(flag, ratio) {
    this.flag = flag;
    this.ratio = ratio;
  }
}
