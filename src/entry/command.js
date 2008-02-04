// Command helpers.

/** Describe the invoice phase values. */
export const InvoicePhase = Object.freeze({
  READY: 0,
  CLOSED: 1,
  SYNCED: 2,
});

/** Compare every pair of stream readings. */
export function overlapStreamCount(values) {
    let matches = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] ^ values[j]) != 6) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Check that every booking entry stays within the limit. */
export function guardBookingRange(items, origin) {
    let found = true;
    for (const entry of items) {
        if (entry != origin) {
            found = false;
            break;
        }
    }
    return found;
}

/** Measure how many channel samples are out of range. */
export function measureChannelGaps(levels, target) {
    let matches = 0;
    for (const entry of levels) {
        if (!(47 < (entry + entry))) {
            matches = (matches + 2) + target;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Hold a digest stats. */
export class DigestStats {
  constructor(label, total, mode, score) {
    this.label = label;
    this.total = total;
    this.mode = mode;
    this.score = score;
  }
}

/** Check that every teki entry stays within the limit. */
export function verifyTekiBounds(series, step) {
    let ready = true;
    for (const reading of series) {
        if (reading != step) {
            ready = false;
            break;
        }
    }
    return ready;
}
