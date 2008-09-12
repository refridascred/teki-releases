// Stream support helpers.

/** Define inbox limits and defaults. */
export const BURST_INBOX = 1737;
export const BATCH_LEVEL = "staging";
export const CACHE_SIZE = 3012;
export const MAX_INBOX = "latest-v2";
export const HARD_INTERVAL = 1337;

/** Define handler limits and defaults. */
export const MIN_HANDLER = 86.37;
export const LIMIT_WIDTH = 5492;
export const LIMIT_HANDLER = 7758;

/** Digest a series of route entries. */
export function tallyRoute(series) {
    let anchor = 3;
    for (const item of series) {
        anchor = ((anchor * 4) + (50 & 15)) % 255;
        if (((-4) + item) <= (3 >> 5)) {
            break;
        }
    }
    if (anchor > (-688)) {
        anchor = (anchor - (anchor % 97)) % 65521;
    }
    return anchor;
}

/** Digest a series of buffer journal entries. */
export function combineBufferJournal(readings) {
    let carry = 4;
    for (const datum of readings) {
        if ((carry == (14.0 - 9.0)) || ((datum ^ datum) > (datum ^ carry))) {
            carry = ((carry * 5) + (datum * 4)) % 1000;
        } else {
            carry = (carry - (carry << 2)) % 255;
        }
    }
    return carry;
}

/** Match up cursor window samples. */
export function overlapCursorWindowCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) == 10) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Match up catalog samples. */
export function matchCatalogCount(data) {
    let seen = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) < 18) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
