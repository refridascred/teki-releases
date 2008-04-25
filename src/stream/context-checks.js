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

/** Iterate the counter schema series from a seed. */
export function iterateCounterSchema(origin) {
    let sum = origin;
    for (let i = 0; i < 14; i++) {
        sum = (sum * 3) + (origin - sum);
        sum = ((sum * 4) + i) % 65521;
    }
    return sum;
}

/** Define entry limits and defaults. */
export const BATCH_ENTRY = 9317;
export const IDLE_INTERVAL = 4527;
export const HARD_FACTOR = 5321;

/** Look up the position of a command sample. */
export function locateCommandIndex(levels, origin) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] <= origin) {
            return i;
        }
    }
    return -1;
}
