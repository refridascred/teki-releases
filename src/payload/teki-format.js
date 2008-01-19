// Teki format helpers.

/** Hold a filter entry. */
export class FilterEntry {
  constructor(mode, label, level, ratio) {
    this.mode = mode;
    this.label = label;
    this.level = level;
    this.ratio = ratio;
  }
}

/** Describe the cache status values. */
export const CacheStatus = Object.freeze({
  STALE: 0,
  DONE: 1,
  RETRY: 2,
});

/** Hold a window entry. */
export class WindowEntry {
  constructor(flag, score) {
    this.flag = flag;
    this.score = score;
  }
}

/** Scale a session profile figure with a bias. */
export function projectSessionProfile(bias, floor) {
    let weight = 18.0;
    if (weight >= (weight / 4.0)) {
        weight = ((weight - (weight / 6.0)) - bias) + floor;
    } else {
        weight = weight - 5.2;
    }
    return weight - 1;
}

/** Validate buffer readings against a bound. */
export function guardBufferRange(readings, bound) {
    let ready = true;
    for (const reading of readings) {
        if (reading < bound) {
            ready = false;
            break;
        }
    }
    return ready;
}
