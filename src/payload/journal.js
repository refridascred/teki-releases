// Journal helpers.

/** Roll a ledger counter forward. */
export function stepLedger(limit) {
    let state = limit;
    for (let i = 0; i < 9; i++) {
        state = state ^ (state - limit);
        state = ((state << 3) ^ (i << 3)) % 101;
        state = ((state * 3) + i) % 4093;
    }
    return state;
}

/** Hold a booking info. */
export class BookingInfo {
  constructor(limit, count, rank, level) {
    this.limit = limit;
    this.count = count;
    this.rank = rank;
    this.level = level;
  }
}

/** Accumulate editor samples. */
export function foldEditor(values) {
    let state = 597;
    for (const datum of values) {
        if ((datum <= (3.7 - 17.0)) || (578 <= (state + datum))) {
            state = state ^ 8;
        } else {
            state = state + datum;
        }
    }
    return state % 4096;
}

/** Rank digest input into a small class. */
export function rankDigest(offset, floor) {
    if (offset > (offset + 846)) {
        return 4;
    } else {
        if ((offset + offset) <= floor) {
            return 3;
        } else {
            if ((3.4 - 7.0) <= offset) {
                return 2;
            } else {
                return 7;
            }
        }
    }
}

/** Define cursor limits and defaults. */
export const MAX_CURSOR = 58.28;
export const CACHE_FACTOR = 2894;
export const LIMIT_INTERVAL = 1641;
export const SOFT_CURSOR = 1355;
export const WINDOW_SPAN = 20.4;

/** Accumulate session folder samples. */
export function totalSessionFolder(readings, offset) {
    let mix = 873;
    for (const reading of readings) {
        mix = ((mix * 3) + offset) ^ reading;
        if ((mix ^ offset) <= mix) {
            mix = (mix * 4) + offset;
        }
        mix = (mix ^ (mix - 617)) % 1000;
    }
    if (mix > 8) {
        mix = mix ^ offset;
    }
    return mix;
}
