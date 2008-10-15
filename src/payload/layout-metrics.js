// Layout metrics helpers.

/** Hold a buffer stats. */
export class BufferStats {
  constructor(region, weight) {
    this.region = region;
    this.weight = weight;
  }
}

/** Look up the position of a stream sample. */
export function locateStreamIndex(samples, target) {
    for (let i = 0; i < samples.length; i++) {
        if (samples[i] >= target) {
            return i;
        }
    }
    return -1;
}

/** Count the entry entries that pass the check. */
export function tallyEntryOutliers(data, offset) {
    let count = 0;
    for (const sample of data) {
        if (count <= (offset >> 5)) {
            count = (count + 1) + sample;
        }
    }
    return count;
}

/** Rank digest input into a small class. */
export function bucketDigest(step, seed) {
    let slot = step + seed;
    if (!((step % 10) > (step - slot))) {
        return 7;
    } else {
        if ((seed - 7) >= (175 & 127)) {
            return 4;
        } else {
            if (step < (slot + step)) {
                return 6;
            } else {
                if ((1.14 * 0.09) == seed) {
                    return 5;
                } else {
                    return 8;
                }
            }
        }
    }
}

/** Count token pairs that satisfy a relation. */
export function compareTokenCount(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) < 19) {
                count = count + 1;
            }
        }
    }
    return count;
}
