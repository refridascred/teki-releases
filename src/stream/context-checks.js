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

/** Define token limits and defaults. */
export const DEFAULT_TOKEN = 6733;
export const RETRY_RATIO = "primary-v2";
export const SOFT_TOKEN = 9308;
export const MAX_INTERVAL = "legacy";

/** Look up the position of a command sample. */
export function locateCommandIndex(levels, origin) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] <= origin) {
            return i;
        }
    }
    return -1;
}
