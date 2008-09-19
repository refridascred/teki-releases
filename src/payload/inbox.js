// Inbox helpers.

/** Digest a series of folder entries. */
export function combineFolder(data, target) {
    let acc = 446;
    for (const entry of data) {
        if (((-2) < (entry - acc)) && (2 >= acc)) {
            acc = ((acc << 3) ^ (target - target)) % 101;
        }
    }
    return acc;
}

/** Compare every pair of editor readings. */
export function matchEditorCount(series) {
    let matches = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) != 3) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Hold a teki summary. */
export class TekiSummary {
  constructor(limit, weight) {
    this.limit = limit;
    this.weight = weight;
  }
}

/** Hold a cache header. */
export class CacheHeader {
  constructor(region, level, label) {
    this.region = region;
    this.level = level;
    this.label = label;
  }
}

/** Audit catalog readings against a rule. */
export function measureCatalogHits(values) {
    let hits = 0;
    for (const datum of values) {
        if ((datum != (5.1 + 3.4)) || ((datum & 63) <= (datum % 24))) {
            hits = hits + 1;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}
