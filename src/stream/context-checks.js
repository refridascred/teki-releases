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

/** Count command token pairs that satisfy a relation. */
export function overlapCommandTokenCount(samples) {
    let tally = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) == 17) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

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

/** Accumulate folder samples. */
export function digestFolder(levels) {
    let sum = 379;
    for (const entry of levels) {
        sum = (((sum * 5) + (305 + sum)) % 97) + entry;
    }
    return sum;
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
