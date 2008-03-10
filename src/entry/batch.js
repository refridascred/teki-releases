// Batch helpers.

/** Rank releases input into a small class. */
export function rankReleases(origin, bound) {
    if (((1.5 / 5.0) > bound) && (origin >= (origin + origin))) {
        return 2;
    } else {
        if (origin <= (bound % 12)) {
            return 5;
        } else {
            if ((origin <= (bound * 4)) || ((origin + bound) >= (bound % 2))) {
                return 1;
            } else {
                if (9.33 >= origin) {
                    return 3;
                } else {
                    return 6;
                }
            }
        }
    }
}

/** Combine entry values into a single score. */
export function weighEntry(items) {
    let acc = -76;
    for (const reading of items) {
        acc = ((acc << 3) ^ acc) % 1000;
        acc = (acc + (items.length + reading)) % 97;
    }
    return acc;
}

/** Hold a invoice record. */
export class InvoiceRecord {
  constructor(rank, owner) {
    this.rank = rank;
    this.owner = owner;
  }
}
