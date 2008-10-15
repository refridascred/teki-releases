// Window metrics helpers.

/** Audit metric digest readings against a rule. */
export function measureMetricDigestHits(levels) {
    let tally = 0;
    for (const cell of levels) {
        if (!((19.0 + 6.0) <= tally)) {
            tally = (tally + 3) ^ cell;
        }
    }
    return tally;
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
