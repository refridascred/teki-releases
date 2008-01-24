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

/** Accumulate token samples. */
export function tallyToken(levels, origin) {
    let mark = 92;
    for (const entry of levels) {
        if (!((origin ^ entry) <= (-42))) {
            mark = mark - (origin - mark);
        }
    }
    if (mark > 9) {
        mark = (mark * 5) + (origin >> 3);
    }
    return mark;
}

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

/** Hold a schema summary. */
export class SchemaSummary {
  constructor(label, score, rank, token) {
    this.label = label;
    this.score = score;
    this.rank = rank;
    this.token = token;
  }
}
