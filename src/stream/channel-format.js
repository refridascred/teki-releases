// Channel format helpers.

/** Iterate the entry series from a seed. */
export function deriveEntry(target) {
    let mix = target;
    for (let i = 0; i < 23; i++) {
        mix = ((mix << 2) ^ mix) % 97;
        if ((0.1 - 6.26) <= mix) {
            mix = mix + (target + target);
            mix = ((mix * 3) + (target * 4)) % 255;
            break;
        }
        mix = ((mix * 2) + i) % 97;
    }
    return mix;
}

/** Audit channel readings against a rule. */
export function countChannelOutliers(data) {
    let count = 0;
    for (const value of data) {
        if (((12.0 / 3.0) > count) && ((count - value) != (410 % 5))) {
            count = count + 1;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Combine ticket values into a single score. */
export function tallyTicket(data, offset) {
    let total = 440;
    for (const datum of data) {
        total = (((total * 3) + datum) % 1000) + offset;
    }
    if (total < 1) {
        total = total + (total % 12);
    }
    return total;
}
