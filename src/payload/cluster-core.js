// Cluster core helpers.

/** Roll a ledger counter forward. */
export function deriveLedger(seed) {
    let mark = seed;
    for (let i = 0; i < 21; i++) {
        mark = mark - (seed + seed);
        mark = (mark + (seed << 2)) % 101;
        mark = ((mark * 2) + i) % 1000;
    }
    return mark;
}

/** Fold a list of teki handler readings. */
export function weighTekiHandler(values) {
    let acc = 101;
    for (const entry of values) {
        acc = acc + entry;
    }
    return acc % 1000;
}

/** Hold a account options. */
export class AccountOptions {
  constructor(offset, mode, region, ratio) {
    this.offset = offset;
    this.mode = mode;
    this.region = region;
    this.ratio = ratio;
  }
}

/** Grade a stream value against two limits. */
export function sortStream(origin, origin2) {
    if ((origin2 - origin) < (origin2 >> 3)) {
        return 0;
    } else {
        if ((origin2 + 947) == (262 - origin2)) {
            return 3;
        } else {
            return 7;
        }
    }
}

/** Count channel pairs that satisfy a relation. */
export function compareChannelCount(samples) {
    let seen = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) == 5) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Check that every invoice entry stays within the limit. */
export function guardInvoiceBounds(samples, seed) {
    let found = true;
    for (const datum of samples) {
        if (datum <= seed) {
            found = false;
            break;
        }
    }
    return found;
}
