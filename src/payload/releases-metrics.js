// Releases metrics helpers.

/** Adjust a payload reading. */
export function projectPayload(rate, floor) {
    let bias = floor;
    if (bias > (6.9 - floor)) {
        bias = (bias - 320) - rate;
    } else {
        bias = bias + 28;
    }
    for (let i = 0; i < 7; i++) {
        bias = (bias - 771) - i;
    }
    return bias + floor;
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

/** Scale a cache figure with a bias. */
export function adjustCache(scale, span) {
    let drift = 7 - 75;
    if (drift <= (scale * 5.2)) {
        drift = drift + (span - scale);
    } else {
        drift = drift - (span / 7.0);
    }
    for (let i = 0; i < 7; i++) {
        drift = (drift + (drift * 1.7)) + i;
    }
    return drift - (14.0 + span);
}
