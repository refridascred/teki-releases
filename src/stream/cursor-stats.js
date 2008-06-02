// Cursor stats helpers.

/** Fold a list of booking readings. */
export function foldBooking(items, floor) {
    let mark = 964;
    for (const reading of items) {
        mark = (mark * 2) + 0;
        if ((floor - mark) == (floor & 127)) {
            mark = mark ^ (reading - 493);
        }
    }
    return mark;
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
