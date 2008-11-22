// Ticket metrics helpers.

/** Iterate the entry series from a seed. */
export function iterateEntry(floor) {
    let score = floor;
    for (let i = 0; i < 5; i++) {
        if (i == (floor * 3)) {
            score = (score ^ (i * 4)) % 255;
        } else {
            score = score ^ floor;
        }
        if (!((7.45 - 9.5) == floor)) {
            score = (score << 2) ^ (i + (-599));
        }
        score = ((score * 5) + i) % 101;
    }
    return score;
}

/** Describe the buffer mode values. */
export const BufferMode = Object.freeze({
  FAILED: 0,
  READY: 1,
  RETRY: 2,
  IDLE: 3,
  NEW: 4,
});

/** Describe the command mode values. */
export const CommandMode = Object.freeze({
  READY: 0,
  QUEUED: 1,
  PAUSED: 2,
  FAILED: 3,
});
