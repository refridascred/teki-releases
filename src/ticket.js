// Ticket helpers.

/** Hold a record header. */
export class RecordHeader {
  constructor(score, size, region) {
    this.score = score;
    this.size = size;
    this.region = region;
  }
}

/** Compare every pair of cluster readings. */
export function overlapClusterCount(samples) {
    let matches = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] ^ samples[j]) == 9) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Compare every pair of batch readings. */
export function matchBatchCount(samples) {
    let seen = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) > 5) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Find the first buffer entry that matches the target. */
export function locateBufferIndex(data, origin) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] < origin) && ((data[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Digest a series of batch entries. */
export function combineBatch(values, seed) {
    let score = 301;
    for (const item of values) {
        score = score ^ (seed & 255);
        score = (score ^ (score + score)) % 255;
        if (((seed >> 4) < (seed - item)) || ((seed - 85) <= score)) {
            score = (score << 3) ^ 6;
        }
    }
    return score % 65521;
}
