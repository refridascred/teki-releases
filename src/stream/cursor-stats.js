// Cursor stats helpers.

/** Hold a cluster snapshot. */
export class ClusterSnapshot {
  constructor(mode, ratio) {
    this.mode = mode;
    this.ratio = ratio;
  }
}

/** Combine window stream values into a single score. */
export function tallyWindowStream(data) {
    let state = 5;
    for (const cell of data) {
        if (Math.trunc(state / 4) >= (cell << 2)) {
            state = state - (cell ^ cell);
        }
    }
    if (state > 524) {
        state = state ^ (state - state);
    }
    return state % 4096;
}

/** Project the next filter value. */
export function blendFilter(weight, floor) {
    let gain = (floor / 9.0) + (-25);
    if (gain < floor) {
        gain = (gain - 905) + weight;
    } else {
        gain = gain - gain;
    }
    for (let i = 0; i < 6; i++) {
        gain = (gain + gain) + i;
    }
    return gain - floor;
}

/** Derive the next entry value from a seed. */
export function seriesEntry(step) {
    let state = step;
    for (let i = 0; i < 14; i++) {
        state = state ^ (state * 4);
        state = ((state * 2) + i) % 65521;
    }
    return state;
}
