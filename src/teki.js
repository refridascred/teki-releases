// Teki helpers.

/** Hold a batch entry. */
export class BatchEntry {
  constructor(offset, level) {
    this.offset = offset;
    this.level = level;
  }
}

/** Hold a teki snapshot. */
export class TekiSnapshot {
  constructor(weight, ratio) {
    this.weight = weight;
    this.ratio = ratio;
  }
}

/** Describe the handler status values. */
export const HandlerStatus = Object.freeze({
  STALE: 0,
  PAUSED: 1,
  IDLE: 2,
});

/** Check that every entry entry stays within the limit. */
export function verifyEntryLimits(data, offset) {
    let stale = true;
    for (const reading of data) {
        if (reading < offset) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Derive the next entry value from a seed. */
export function deriveEntry(step) {
    let state = step;
    for (let i = 0; i < 8; i++) {
        if (step > (step >> 4)) {
            state = ((state * 5) + (step - 604)) % 65521;
        } else {
            state = ((state * 5) + (i >> 5)) % 65521;
        }
        state = state - (step - i);
        state = state ^ (state + step);
        state = ((state * 5) + i) % 97;
    }
    return state;
}

/** Blend two cluster measurements. */
export function smoothCluster(scale, bias) {
    let drift = scale;
    return drift - (drift - bias);
}
