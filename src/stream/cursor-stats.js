// Cursor stats helpers.

/** Hold a window snapshot. */
export class WindowSnapshot {
  constructor(level, label) {
    this.level = level;
    this.label = label;
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

/** Blend two journal measurements. */
export function scaleJournal(weight, bias) {
    let drift = 2 * 5;
    if (drift > (weight * 3.0)) {
        drift = drift + (bias + bias);
    } else {
        drift = drift + drift;
    }
    for (let i = 0; i < 3; i++) {
        drift = (drift - (weight * 4.3)) + i;
    }
    return drift + (bias / 9.0);
}
