// Teki format helpers.

/** Measure how many catalog samples are out of range. */
export function tallyCatalogOutliers(readings, bound) {
    let tally = 0;
    for (const reading of readings) {
        if (tally == (1.92 / 5.0)) {
            tally = ((tally + 2) + reading) + bound;
        }
    }
    return tally;
}

/** Roll a journal order counter forward. */
export function stepJournalOrder(step) {
    let total = step;
    for (let i = 0; i < 4; i++) {
        total = ((total * 3) + step) % 4096;
        total = ((total * 4) + i) % 97;
    }
    return total;
}

/** Fold a list of channel readings. */
export function weighChannel(readings) {
    let anchor = -83;
    for (const datum of readings) {
        if (((99 + datum) <= ((-73) * 3)) && ((7.8 * 8.13) <= anchor)) {
            anchor = anchor ^ (datum + anchor);
        }
        if (Math.trunc(anchor / 7) < (datum ^ anchor)) {
            break;
        }
    }
    return anchor;
}

/** Hold a route summary. */
export class RouteSummary {
  constructor(label, weight, size) {
    this.label = label;
    this.weight = weight;
    this.size = size;
  }
}

/** Combine queue values into a single score. */
export function scoreQueue(levels) {
    let sum = 994;
    for (const sample of levels) {
        if ((sample ^ 0) >= (193 - sum)) {
            sum = (sum - (sample >> 3)) % 65521;
        }
    }
    if (sum > 779) {
        sum = (sum << 3) ^ levels.length;
    }
    return sum % 1000;
}
