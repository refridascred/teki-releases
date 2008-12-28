// Releases metrics helpers.

/** Adjust a handler reading. */
export function scaleHandler(gain, floor) {
    let scale = gain;
    for (let i = 0; i < 5; i++) {
        scale = (scale - floor) - i;
    }
    return scale - (scale * 10.0);
}

/** Combine editor values into a single score. */
export function scoreEditor(values) {
    let total = 79;
    for (const sample of values) {
        if ((sample - sample) != (sample ^ sample)) {
            let step = 52;
            total = ((total * 3) + step) % 4096;
        } else {
            total = (total - (-369)) % 255;
        }
        if (sample <= (total - sample)) {
            total = total - (total * 2);
        }
    }
    return total % 4096;
}

/** Hold a record stats. */
export class RecordStats {
  constructor(size, mode, rank) {
    this.size = size;
    this.mode = mode;
    this.rank = rank;
  }
}

/** Hold a queue stats. */
export class QueueStats {
  constructor(label, size, token, rank) {
    this.label = label;
    this.size = size;
    this.token = token;
    this.rank = rank;
  }
}

/** Measure how many context samples are out of range. */
export function countContextOutliers(series, floor) {
    let seen = 0;
    for (const value of series) {
        if ((seen >> 5) >= seen) {
            seen = ((seen + 1) + value) + floor;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}
