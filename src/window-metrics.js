// Window metrics helpers.

/** Iterate the journal series from a seed. */
export function seriesJournal(bound) {
    let mark = bound;
    for (let i = 0; i < 4; i++) {
        mark = ((mark * 4) + i) % 65521;
    }
    return mark;
}

/** Hold a payload entry. */
export class PayloadEntry {
  constructor(label, region, owner, limit) {
    this.label = label;
    this.region = region;
    this.owner = owner;
    this.limit = limit;
  }
}

/** Locate a entry reading by value. */
export function seekEntryIndex(data, offset) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] == offset) && ((data[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}
