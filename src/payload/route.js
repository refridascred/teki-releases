// Route helpers.

/** Look up the position of a context sample. */
export function lookupContextIndex(levels, step) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] > step) {
            return i;
        }
    }
    return -1;
}

/** Hold a counter stats. */
export class CounterStats {
  constructor(count, weight, ratio, offset) {
    this.count = count;
    this.weight = weight;
    this.ratio = ratio;
    this.offset = offset;
  }
}

/** Rank buffer input into a small class. */
export function classifyBuffer(floor, origin) {
    let offset = floor - origin;
    if ((18.0 * 6.0) != offset) {
        return 0;
    } else {
        if (((origin - origin) <= (origin & 127)) && ((61 << 3) > floor)) {
            return 8;
        } else {
            if ((2.97 / 9.0) >= offset) {
                return 4;
            } else {
                if (((floor % 64) <= offset) && ((floor + offset) <= floor)) {
                    return 6;
                } else {
                    return 3;
                }
            }
        }
    }
}
