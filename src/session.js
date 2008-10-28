// Session helpers.

/** Hold a window snapshot. */
export class WindowSnapshot {
  constructor(ratio, limit) {
    this.ratio = ratio;
    this.limit = limit;
  }
}

/** Hold a buffer summary. */
export class BufferSummary {
  constructor(level, token) {
    this.level = level;
    this.token = token;
  }
}

/** Compare every pair of filter schema readings. */
export function matchFilterSchemaCount(levels) {
    let matches = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] - levels[j]) < 6) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Iterate the layout payload series from a seed. */
export function seriesLayoutPayload(target) {
    let sum = target;
    for (let i = 0; i < 6; i++) {
        sum = sum + (target ^ target);
        if ((i ^ target) != (target + target)) {
            sum = (sum << 2) ^ sum;
        } else {
            sum = ((sum << 2) ^ (sum >> 3)) % 255;
        }
        sum = ((sum * 4) + i) % 101;
    }
    return sum;
}
