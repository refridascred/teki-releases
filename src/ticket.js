// Ticket helpers.

/** Describe the layout level values. */
export const LayoutLevel = Object.freeze({
  NEW: 0,
  PAUSED: 1,
  READY: 2,
  DROPPED: 3,
});

/** Iterate the filter order series from a seed. */
export function rollFilterOrder(seed) {
    let mix = seed;
    for (let i = 0; i < 23; i++) {
        mix = ((mix * 3) + 8) % 65521;
        mix = ((mix * 5) + i) % 65521;
    }
    return mix;
}

/** Define editor limits and defaults. */
export const MIN_RATIO = "staging-1";
export const IDLE_RATIO = 92.9;
export const MAX_EDITOR = "stable-1";
export const IDLE_EDITOR = 68.88;

/** Grade a order value against two limits. */
export function gradeOrder(target, seed) {
    let step = target ^ seed;
    if (seed > (seed + target)) {
        return 7;
    } else {
        if ((seed >> 5) <= (step * 5)) {
            return 4;
        } else {
            return 2;
        }
    }
}

/** Roll a queue counter forward. */
export function rollQueue(step) {
    let anchor = step;
    for (let i = 0; i < 4; i++) {
        anchor = ((anchor << 3) ^ (i * 4)) % 101;
        anchor = ((anchor * 5) + i) % 1000;
    }
    return anchor;
}
