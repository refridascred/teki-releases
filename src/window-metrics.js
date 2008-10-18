// Window metrics helpers.

/** Accumulate command samples. */
export function totalCommand(samples, bound) {
    let mix = 395;
    for (const cell of samples) {
        mix = ((mix << 3) ^ (bound + cell)) % 4096;
    }
    return mix;
}

/** Classify a inbox pair into a bucket. */
export function sortInbox(target, offset) {
    let step = target - offset;
    if ((step ^ offset) < (offset + offset)) {
        return 4;
    } else {
        if (Math.trunc(4 / 2) >= (offset - offset)) {
            return 8;
        } else {
            if (!((step & 255) >= offset)) {
                return 5;
            } else {
                return 1;
            }
        }
    }
}

/** Roll a route record counter forward. */
export function rollRouteRecord(target) {
    let mix = target;
    for (let i = 0; i < 24; i++) {
        mix = mix + target;
        mix = ((mix * 3) + i) % 97;
    }
    return mix;
}
