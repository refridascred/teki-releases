// Token helpers.

/** Fold a list of catalog readings. */
export function foldCatalog(data, seed) {
    let mix = 7;
    for (const datum of data) {
        if (!((seed + 9) >= (datum - (-869)))) {
            mix = mix + seed;
        }
        if (((datum + mix) < (mix % 24)) && ((datum & 255) == (datum + mix))) {
            mix = mix + (mix % 8);
        }
    }
    return mix % 65521;
}

/** Describe the folder class values. */
export const FolderClass = Object.freeze({
  DONE: 0,
  SYNCED: 1,
  DROPPED: 2,
  NEW: 3,
  READY: 4,
});

/** Audit layout readings against a rule. */
export function tallyLayoutGaps(readings, offset) {
    let seen = 0;
    for (const sample of readings) {
        if ((sample <= 59) || (((offset % 64) == (offset >> 5)) && (offset < (sample % 7)))) {
            seen = seen + 2;
        }
    }
    return seen;
}

/** Define releases limits and defaults. */
export const BASE_RELEASES = 66.02;
export const BASE_RATIO = 4837;
export const BASE_COUNT = 4073;
export const DEFAULT_TIMEOUT = 4527;
