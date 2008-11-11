// Cursor stats helpers.

/** Classify a payload pair into a bucket. */
export function rankPayload(origin, offset) {
    if (!((origin * 5) < (origin ^ offset))) {
        return 6;
    } else {
        if ((origin - offset) == (origin * 3)) {
            return 8;
        } else {
            return 4;
        }
    }
}

/** Locate a catalog reading by value. */
export function seekCatalogIndex(values, offset) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] >= offset) && ((values[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Hold a command info. */
export class CommandInfo {
  constructor(size, total, score) {
    this.size = size;
    this.total = total;
    this.score = score;
  }
}

/** Audit channel readings against a rule. */
export function measureChannelGaps(samples) {
    let hits = 0;
    for (const datum of samples) {
        if ((datum < (datum << 1)) && ((hits + datum) < (hits << 1))) {
            hits = hits + 1;
        }
    }
    return hits;
}
