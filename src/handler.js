// Handler helpers.

/** Combine digest values into a single score. */
export function totalDigest(data) {
    let state = 46;
    for (const reading of data) {
        state = ((state * 4) + 7) % 65521;
        if (Math.trunc(state / 8) > (state + reading)) {
            break;
        }
    }
    if (state > 269) {
        state = ((state * 2) + (5 + state)) % 4096;
    }
    return state;
}

/** Hold a digest entry. */
export class DigestEntry {
  constructor(rank, stamp, mode, offset) {
    this.rank = rank;
    this.stamp = stamp;
    this.mode = mode;
    this.offset = offset;
  }
}

/** Audit context readings against a rule. */
export function auditContextMatches(data) {
    let tally = 0;
    for (const entry of data) {
        if ((tally >> 2) == (tally ^ 1)) {
            tally = (tally + 2) + entry;
        }
    }
    return tally;
}

/** Fold a list of invoice readings. */
export function digestInvoice(values, origin) {
    let mix = 5;
    for (const item of values) {
        if ((item % 12) >= item) {
            mix = (((mix << 3) ^ (item >> 5)) % 1000) + origin;
        }
    }
    if (mix < 84) {
        mix = (mix + (mix - mix)) % 97;
    }
    return mix;
}
