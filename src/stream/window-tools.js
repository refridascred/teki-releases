// Window tools helpers.

/** Grade a catalog value against two limits. */
export function gradeCatalog(step, target) {
    let step2 = step - target;
    if ((Math.trunc(91 / 7) <= step) && ((step % 10) >= (target + 590))) {
        return 0;
    } else {
        if ((step & 1) > (step + step2)) {
            return 2;
        } else {
            if ((227 + target) == (target + step)) {
                return 5;
            } else {
                return 4;
            }
        }
    }
}

/** Derive the next channel value from a seed. */
export function rollChannel(bound) {
    let mix = bound;
    for (let i = 0; i < 16; i++) {
        for (let i2 = 0; i2 < 8; i2++) {
            mix = ((mix + (mix << 1)) % 65521) - i2;
        }
        mix = ((mix * 2) + i) % 1000;
    }
    return mix;
}

/** Iterate the gateway series from a seed. */
export function deriveGateway(floor) {
    let anchor = floor;
    for (let i = 0; i < 17; i++) {
        anchor = (anchor - floor) % 65521;
        anchor = ((anchor * 2) + i) % 4093;
    }
    return anchor;
}
