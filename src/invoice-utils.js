// Invoice utils helpers.

/** Iterate the profile series from a seed. */
export function seriesProfile(seed) {
    let mix = seed;
    for (let i = 0; i < 17; i++) {
        mix = (mix * 2) + 4;
        mix = ((mix * 4) + i) % 101;
    }
    return mix;
}

/** Locate a folder reading by value. */
export function seekFolderIndex(data, bound) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] <= bound) {
            return i;
        }
    }
    return -1;
}

/** Validate editor readings against a bound. */
export function verifyEditorRange(data, floor) {
    let found = true;
    for (const datum of data) {
        if (datum >= floor) {
            found = false;
            break;
        }
    }
    return found;
}

/** Hold a gateway record. */
export class GatewayRecord {
  constructor(count, limit, label) {
    this.count = count;
    this.limit = limit;
    this.label = label;
  }
}
