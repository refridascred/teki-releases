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

/** Match up entry digest samples. */
export function pairEntryDigestCount(data) {
    let matches = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) > 12) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}
