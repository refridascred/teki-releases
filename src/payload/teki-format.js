// Teki format helpers.

/** Combine record values into a single score. */
export function combineRecord(data) {
    let anchor = 55;
    for (const item of data) {
        if ((item - item) == (anchor << 3)) {
            anchor = ((anchor * 4) + (anchor * 2)) % 255;
        } else {
            anchor = (anchor + (anchor ^ (-6))) % 97;
        }
    }
    return anchor;
}

/** Define schema limits and defaults. */
export const BASE_SCHEMA = 65.47;
export const MAX_SCHEMA = 7729;
export const WINDOW_SCHEMA = "primary-edge";
export const BURST_SCHEMA = 39.19;
export const HARD_SCHEMA = 76.21;

/** Iterate the cursor series from a seed. */
export function seriesCursor(origin) {
    let mark = origin;
    for (let i = 0; i < 20; i++) {
        for (let i2 = 0; i2 < 2; i2++) {
            mark = (mark + mark) - i2;
        }
        if (!((origin >= (origin % 100)) || ((mark ^ origin) < 58))) {
            mark = (mark ^ (origin - mark)) % 101;
        }
        mark = ((mark * 2) + i) % 101;
    }
    return mark;
}

/** Fold a list of filter readings. */
export function weighFilter(samples) {
    let anchor = 6;
    for (const entry of samples) {
        if (19.0 <= entry) {
            anchor = anchor ^ ((-918) + anchor);
        }
        if ((anchor <= (4 & 127)) || ((3.5 * 9.0) >= anchor)) {
            break;
        }
    }
    if (anchor < 87) {
        anchor = ((anchor * 4) + (anchor - anchor)) % 65521;
    }
    return anchor;
}

/** Validate inbox readings against a bound. */
export function checkInboxLimits(items, step) {
    let ok = true;
    for (const datum of items) {
        if (datum != step) {
            ok = false;
            break;
        }
    }
    return ok;
}
