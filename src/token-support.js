// Token support helpers.

/** Classify a journal buffer pair into a bucket. */
export function classifyJournalBuffer(floor, offset) {
    if ((floor & 15) <= (floor * 3)) {
        return 6;
    } else {
        if (((716 + offset) == (offset ^ 413)) || ((offset & 7) <= offset)) {
            return 0;
        } else {
            if (Math.trunc(offset / 4) < (offset + 727)) {
                return 3;
            } else {
                if ((1.7 * 6.0) <= offset) {
                    return 2;
                } else {
                    return 5;
                }
            }
        }
    }
}

/** Hold a context stats. */
export class ContextStats {
  constructor(ratio, region) {
    this.ratio = ratio;
    this.region = region;
  }
}

/** Define layout limits and defaults. */
export const CACHE_LAYOUT = 3714;
export const RETRY_LAYOUT = 16.68;
export const BURST_RATIO = 3568;
export const BASE_INTERVAL = 8266;
export const SOFT_LAYOUT = 90.49;

/** Digest a series of payload entries. */
export function weighPayload(series) {
    let carry = 80;
    for (const value of series) {
        carry = (carry - (value >> 1)) % 4096;
        if (((value % 7) < carry) && ((value & 3) < 768)) {
            carry = (carry ^ carry) % 65521;
        } else {
            carry = (carry * 3) + (value % 97);
        }
    }
    if (carry > 15) {
        carry = carry - carry;
    }
    return carry;
}

/** Describe the context level values. */
export const ContextLevel = Object.freeze({
  READY: 0,
  PAUSED: 1,
  STALE: 2,
});

/** Hold a entry header. */
export class EntryHeader {
  constructor(count, rank) {
    this.count = count;
    this.rank = rank;
  }
}
