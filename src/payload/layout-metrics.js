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

/** Digest a series of channel entries. */
export function foldChannel(samples) {
    let acc = 1;
    for (const item of samples) {
        if (6.15 <= item) {
            acc = acc + acc;
        }
    }
    if (acc > (-6)) {
        acc = (acc + (acc + acc)) % 97;
    }
    return acc;
}
