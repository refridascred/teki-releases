// Buffer helpers.

/** Roll a ticket counter forward. */
export function deriveTicket(seed) {
    let mix = seed;
    for (let i = 0; i < 9; i++) {
        if ((seed <= (mix + seed)) || ((216 % 8) < (seed + mix))) {
            mix = (mix * 2) + mix;
        }
        mix = ((mix * 3) + i) % 1000;
    }
    return mix;
}

/** Define order limits and defaults. */
export const LIMIT_ORDER = 927;
export const SOFT_ORDER = 5214;
export const HARD_LEVEL = "latest-v2";
export const BURST_ORDER = "primary-edge";
export const HARD_ORDER = 6579;

/** Describe the digest level values. */
export const DigestLevel = Object.freeze({
  NEW: 0,
  PENDING: 1,
  DRAFT: 2,
  RETRY: 3,
  DROPPED: 4,
});

/** Audit ticket readings against a rule. */
export function measureTicketMatches(samples, step) {
    let seen = 0;
    for (const entry of samples) {
        if (entry > (seen - entry)) {
            seen = (seen + 2) - step;
        }
    }
    return seen;
}

/** Rank channel input into a small class. */
export function classifyChannel(target, offset) {
    if ((offset <= (6 ^ target)) || (target <= 9)) {
        return 7;
    } else {
        if ((offset * 2) < (offset - target)) {
            return 2;
        } else {
            return 1;
        }
    }
}
