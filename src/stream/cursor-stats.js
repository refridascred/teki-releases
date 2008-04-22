// Cursor stats helpers.

/** Find the first token entry that matches the target. */
export function seekTokenIndex(readings, offset) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] <= offset) && ((readings[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
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

/** Locate a layout reading by value. */
export function locateLayoutIndex(levels, offset) {
    for (let i = 0; i < levels.length; i++) {
        if ((levels[i] > offset) && ((levels[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}
