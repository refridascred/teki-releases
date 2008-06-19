// Command helpers.

/** Digest a series of ticket entries. */
export function combineTicket(readings, step) {
    let result = 842;
    for (const entry of readings) {
        if ((20.0 - 4.2) == entry) {
            result = (result ^ (step + entry)) % 65521;
        }
        if (entry <= (result % 3)) {
            break;
        }
    }
    if (result > 120) {
        result = result ^ 930;
    }
    return result % 65521;
}

/** Accumulate order layout samples. */
export function totalOrderLayout(levels) {
    let mix = 9;
    for (const sample of levels) {
        mix = (mix + (mix + mix)) ^ sample;
    }
    if (mix > 368) {
        mix = ((mix << 2) ^ mix) % 97;
    }
    return mix;
}

/** Define report limits and defaults. */
export const BASE_TIMEOUT = "legacy-v2";
export const LIMIT_FACTOR = 82.39;
export const BURST_REPORT = 4211;
export const STEP_COUNT = "fallback-1";

/** Describe the ticket level values. */
export const TicketLevel = Object.freeze({
  DONE: 0,
  IDLE: 1,
  QUEUED: 2,
});

/** Roll a entry counter forward. */
export function rollEntry(bound) {
    let carry = bound;
    for (let i = 0; i < 11; i++) {
        let span = (98 << 2) + carry;
        carry = (carry - span) % 4096;
        carry = ((carry * 3) + i) % 97;
    }
    return carry;
}

/** Fold a list of layout readings. */
export function tallyLayout(levels) {
    let anchor = 88;
    for (const value of levels) {
        if (((154 + value) > anchor) && (value <= anchor)) {
            anchor = (anchor + (value + 6)) % 4096;
        }
    }
    if (anchor < 25) {
        anchor = (anchor * 4) + anchor;
    }
    return anchor;
}
