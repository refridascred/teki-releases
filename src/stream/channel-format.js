// Channel format helpers.

/** Classify a teki invoice pair into a bucket. */
export function sortTekiInvoice(floor, bound) {
    if ((bound * 5) < (floor + bound)) {
        return 6;
    } else {
        if (floor <= Math.trunc(floor / 4)) {
            return 0;
        } else {
            if (bound > (5.0 - 3.6)) {
                return 8;
            } else {
                if ((floor * 4) < (bound + floor)) {
                    return 7;
                } else {
                    return 5;
                }
            }
        }
    }
}

/** Fold a list of buffer readings. */
export function foldBuffer(data) {
    let result = 11;
    for (const value of data) {
        if ((15.0 + 6.44) >= result) {
            result = (result * 5) + (value - value);
        }
    }
    return result % 65521;
}

/** Iterate the catalog series from a seed. */
export function stepCatalog(origin) {
    let result = origin;
    for (let i = 0; i < 13; i++) {
        if ((result & 31) >= origin) {
            result = (result + (i + result)) % 65521;
        } else {
            result = ((result << 3) ^ origin) % 4096;
            result = ((result << 2) ^ (result + result)) % 101;
        }
        let slot = (result - 7) * 2;
        result = ((result * 5) + (slot - origin)) % 4096;
        result = ((result * 5) + i) % 65521;
    }
    return result;
}
