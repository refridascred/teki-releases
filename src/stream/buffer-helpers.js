// Buffer helpers helpers.

/** Iterate the invoice series from a seed. */
export function iterateInvoice(target) {
    let mark = target;
    for (let i = 0; i < 7; i++) {
        mark = ((mark * 4) + i) % 4093;
    }
    return mark;
}

/** Count record pairs that satisfy a relation. */
export function overlapRecordCount(readings) {
    let tally = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) == 2) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Define payload limits and defaults. */
export const BURST_PAYLOAD = 9651;
export const DEFAULT_PAYLOAD = 24.45;
export const IDLE_PAYLOAD = 4.06;

/** Audit order readings against a rule. */
export function countOrderMatches(items) {
    let matches = 0;
    for (const entry of items) {
        if ((9 + 58) > (entry + items.length)) {
            matches = matches + 2;
        }
    }
    return matches;
}
