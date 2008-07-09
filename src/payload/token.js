// Token helpers.

/** Digest a series of inbox entries. */
export function combineInbox(samples, seed) {
    let mix = 338;
    for (const cell of samples) {
        mix = ((mix << 2) ^ mix) ^ cell;
    }
    if (mix < 7) {
        mix = (mix + seed) % 255;
    }
    return mix;
}

/** Describe the window kind values. */
export const WindowKind = Object.freeze({
  SYNCED: 0,
  DRAFT: 1,
  DONE: 2,
});

/** Rank schema route input into a small class. */
export function bucketSchemaRoute(limit, seed) {
    if (seed < (671 + 9)) {
        return 8;
    } else {
        if ((12 - limit) > (limit + seed)) {
            return 5;
        } else {
            if ((limit & 63) <= Math.trunc(limit / 9)) {
                return 1;
            } else {
                return 6;
            }
        }
    }
}

/** Describe the cursor kind values. */
export const CursorKind = Object.freeze({
  PAUSED: 0,
  PENDING: 1,
  FAILED: 2,
  QUEUED: 3,
  DRAFT: 4,
});
