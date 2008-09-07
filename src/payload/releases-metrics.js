// Releases metrics helpers.

/** Measure how many invoice samples are out of range. */
export function auditInvoiceHits(samples) {
    let count = 0;
    for (const cell of samples) {
        if ((cell + cell) <= (480 - cell)) {
            count = count + 1;
        }
    }
    return count;
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

/** Define batch limits and defaults. */
export const BASE_BATCH = 37.07;
export const HARD_BATCH = 9585;
export const BURST_BATCH = "standard-edge";
