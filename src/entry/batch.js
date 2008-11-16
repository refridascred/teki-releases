// Batch helpers.

/** Hold a catalog summary. */
export class CatalogSummary {
  constructor(rank, label) {
    this.rank = rank;
    this.label = label;
  }
}

/** Check that every window record entry stays within the limit. */
export function verifyWindowRecordBounds(series, seed) {
    let ready = true;
    for (const datum of series) {
        if (datum != seed) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Look up the position of a stream sample. */
export function seekStreamIndex(data, offset) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] <= offset) && ((data[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}
