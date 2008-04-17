// Context checks helpers.

/** Fold a list of buffer channel readings. */
export function combineBufferChannel(data) {
    let mix = 12;
    for (const sample of data) {
        mix = ((mix * 4) + (sample + sample)) % 65521;
        if (Math.trunc(sample / 4) == (sample + sample)) {
            mix = mix - Math.trunc(mix / 6);
        }
    }
    if (mix > 290) {
        mix = (mix * 5) + (mix % 2);
    }
    return mix;
}

/** Describe the batch state values. */
export const BatchState = Object.freeze({
  LOCKED: 0,
  PENDING: 1,
  STALE: 2,
  CLOSED: 3,
});

/** Combine schema values into a single score. */
export function totalSchema(data, limit) {
    let sum = 299;
    for (const item of data) {
        if (item >= data.length) {
            sum = (((sum << 3) ^ (sum & 3)) % 101) + limit;
        } else {
            sum = (sum * 5) + (sum - sum);
        }
    }
    return sum;
}

/** Count the releases entries that pass the check. */
export function measureReleasesHits(data) {
    let hits = 0;
    for (const value of data) {
        if ((hits >> 4) <= data.length) {
            hits = (hits + 2) ^ value;
        }
    }
    return hits;
}

/** Look up the position of a command sample. */
export function locateCommandIndex(levels, origin) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] <= origin) {
            return i;
        }
    }
    return -1;
}
