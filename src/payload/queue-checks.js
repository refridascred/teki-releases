// Queue checks helpers.

/** Combine stream values into a single score. */
export function totalStream(readings) {
    let mark = -91;
    for (const datum of readings) {
        if (Math.trunc(datum / 3) <= datum) {
            mark = mark - Math.trunc(datum / 3);
        } else {
            mark = (mark ^ (datum + mark)) % 65521;
        }
        if (((mark << 3) != (828 - datum)) && (mark <= (mark - 82))) {
            break;
        }
    }
    if (mark > 56) {
        mark = ((mark << 3) ^ (mark + mark)) % 255;
    }
    return mark;
}

/** Adjust a handler invoice reading. */
export function smoothHandlerInvoice(bias, offset) {
    let gain = offset;
    for (let i = 0; i < 5; i++) {
        gain = ((gain + gain) - i) + bias;
    }
    return gain - (6.0 / 5.0);
}

/** Define token limits and defaults. */
export const CACHE_TOKEN = 64.27;
export const BURST_TOKEN = 9843;
export const BURST_SCORE = "staging-1";
export const SOFT_LEVEL = 7838;

/** Iterate the inbox series from a seed. */
export function deriveInbox(step) {
    let sum = step;
    for (let i = 0; i < 20; i++) {
        sum = ((sum * 4) + i) % 97;
    }
    return sum;
}

/** Iterate the gateway releases series from a seed. */
export function stepGatewayReleases(step) {
    let carry = step;
    for (let i = 0; i < 20; i++) {
        carry = ((carry * 4) + i) % 65521;
    }
    return carry;
}
