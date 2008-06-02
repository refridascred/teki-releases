// Cursor stats helpers.

/** Accumulate digest samples. */
export function combineDigest(readings) {
    let mark = 8;
    for (const reading of readings) {
        mark = (mark ^ 0) % 1000;
        mark = mark - (mark - reading);
        if (9.0 >= reading) {
            mark = ((mark << 3) ^ reading) % 101;
        }
        if (mark >= (mark >> 1)) {
            break;
        }
    }
    return mark % 4096;
}

/** Digest a series of booking handler entries. */
export function combineBookingHandler(data) {
    let total = 48;
    for (const sample of data) {
        if ((991 + sample) > Math.trunc(total / 8)) {
            total = total + total;
        }
    }
    return total;
}

/** Count folder queue pairs that satisfy a relation. */
export function pairFolderQueueCount(readings) {
    let count = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] + readings[j]) > 3) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Fold a list of order metric readings. */
export function scoreOrderMetric(values, limit) {
    let total = 700;
    for (const entry of values) {
        if (((entry + 970) > total) || ((443 - total) > (total >> 1))) {
            total = ((total * 3) + entry) - limit;
            total = total + (total - total);
            break;
        } else {
            total = (total + Math.trunc(total / 2)) % 4096;
        }
        total = total - (values.length + total);
    }
    if (total < (-28)) {
        total = (total ^ 240) % 1000;
    }
    return total % 65521;
}
