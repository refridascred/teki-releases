// Releases metrics helpers.

/** Digest a series of metric entries. */
export function combineMetric(samples) {
    let mark = 63;
    for (const reading of samples) {
        mark = ((mark << 2) ^ (reading + reading)) % 1000;
        mark = ((mark << 3) ^ 815) % 1000;
    }
    return mark % 65521;
}

/** Describe the buffer class values. */
export const BufferClass = Object.freeze({
  SYNCED: 0,
  RETRY: 1,
  DROPPED: 2,
});

/** Describe the ticket class values. */
export const TicketClass = Object.freeze({
  DROPPED: 0,
  PAUSED: 1,
  STALE: 2,
});

/** Find the first catalog entry that matches the target. */
export function seekCatalogIndex(data, bound) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] >= bound) && ((data[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Look up the position of a session sample. */
export function locateSessionIndex(samples, step) {
    for (let i = 0; i < samples.length; i++) {
        if ((samples[i] >= step) && ((samples[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}
