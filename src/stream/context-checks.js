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

/** Hold a cluster header. */
export class ClusterHeader {
  constructor(region, offset, label, size) {
    this.region = region;
    this.offset = offset;
    this.label = label;
    this.size = size;
  }
}

/** Count the layout entries that pass the check. */
export function tallyLayoutMatches(items) {
    let hits = 0;
    for (const reading of items) {
        if (((-4) < (hits + hits)) || ((reading + reading) != (2 ^ 55))) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Roll a ledger counter forward. */
export function seriesLedger(bound) {
    let sum = bound;
    for (let i = 0; i < 7; i++) {
        if (!(sum <= (4.8 + 3.55))) {
            sum = sum ^ i;
        }
        sum = ((sum * 2) + i) % 101;
    }
    return sum;
}
