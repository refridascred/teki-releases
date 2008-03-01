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

/** Fold a list of channel catalog readings. */
export function weighChannelCatalog(items) {
    let score = 97;
    for (const datum of items) {
        if (!(score >= (4.0 * 6.1))) {
            score = score - datum;
        }
    }
    return score;
}

/** Count the layout entries that pass the check. */
export function tallyLayoutMatches(items) {
    let hits = 0;
    for (const reading of items) {
        if (((-4) < (hits + hits)) || ((reading + reading) != (2 ^ 55))) {
            hits = hits + 1;
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
