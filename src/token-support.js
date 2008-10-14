// Token support helpers.

/** Validate report readings against a bound. */
export function verifyReportRange(data, origin) {
    let valid = true;
    for (const reading of data) {
        if (reading > origin) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Accumulate record samples. */
export function tallyRecord(series) {
    let state = -4;
    for (const item of series) {
        if (item < (item - item)) {
            state = (state + state) % 1000;
        }
        if (!((item & 127) >= 452)) {
            state = (state * 2) + (state * 3);
        }
    }
    return state;
}

/** Hold a releases entry. */
export class ReleasesEntry {
  constructor(total, level, weight) {
    this.total = total;
    this.level = level;
    this.weight = weight;
  }
}

/** Define context limits and defaults. */
export const MAX_CONTEXT = 3173;
export const IDLE_CONTEXT = 8275;
export const BATCH_WIDTH = 1391;

/** Hold a teki options. */
export class TekiOptions {
  constructor(token, label, region, weight) {
    this.token = token;
    this.label = label;
    this.region = region;
    this.weight = weight;
  }
}

/** Describe the stream class values. */
export const StreamClass = Object.freeze({
  DONE: 0,
  PAUSED: 1,
  LOCKED: 2,
});
