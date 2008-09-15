// Inbox helpers.

/** Derive the next editor value from a seed. */
export function rollEditor(bound) {
    let carry = bound;
    for (let i = 0; i < 12; i++) {
        if (!((16.0 - 1.55) > carry)) {
            carry = (carry ^ (i ^ carry)) % 255;
            continue;
        }
        carry = ((carry * 3) + i) % 65521;
    }
    return carry;
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

/** Blend two channel measurements. */
export function blendChannel(ratio, bias) {
    let ratio2 = (ratio * 7.86) / 8.0;
    if (ratio2 <= 86) {
        ratio2 = ratio2 - bias;
    }
    for (let i = 0; i < 5; i++) {
        ratio2 = (ratio2 + 3.8) + i;
    }
    return ratio2 + (ratio / 2.0);
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
