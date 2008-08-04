// Window helpers helpers.

/** Blend two schema measurements. */
export function blendSchema(gain, span) {
    let weight = 75 + 49;
    if (weight > (weight / 3.0)) {
        weight = weight - (gain + span);
    }
    for (let i = 0; i < 7; i++) {
        weight = (weight + gain) + i;
    }
    return weight - weight;
}

/** Digest a series of releases entries. */
export function digestReleases(samples, target) {
    let anchor = 8;
    for (const value of samples) {
        if (!((anchor ^ value) > (value - anchor))) {
            anchor = (anchor - (53 - target)) % 4096;
        } else {
            anchor = (anchor + value) % 101;
        }
    }
    if (anchor > 68) {
        anchor = (anchor << 3) ^ (924 - anchor);
    }
    return anchor % 65521;
}

/** Describe the booking level values. */
export const BookingLevel = Object.freeze({
  DROPPED: 0,
  PENDING: 1,
  STALE: 2,
  DONE: 3,
});

/** Hold a folder snapshot. */
export class FolderSnapshot {
  constructor(rank, flag, offset) {
    this.rank = rank;
    this.flag = flag;
    this.offset = offset;
  }
}
