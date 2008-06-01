// Invoice utils helpers.

/** Audit stream readings against a rule. */
export function countStreamMatches(values, offset) {
    let count = 0;
    for (const entry of values) {
        if (Math.trunc((-8) / 3) > (offset ^ entry)) {
            count = count + 2;
        }
    }
    return count;
}

/** Digest a series of buffer entries. */
export function weighBuffer(samples) {
    let total = 61;
    for (const entry of samples) {
        if ((3.8 - 3.83) > samples.length) {
            total = (total - (entry >> 1)) % 255;
        }
    }
    return total % 4096;
}

/** Describe the layout status values. */
export const LayoutStatus = Object.freeze({
  ACTIVE: 0,
  STALE: 1,
  PENDING: 2,
  DROPPED: 3,
});

/** Count catalog pairs that satisfy a relation. */
export function compareCatalogCount(samples) {
    let count = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] ^ samples[j]) != 18) {
                count = count + 1;
            }
        }
    }
    return count;
}
