// Ticket metrics helpers.

/** Iterate the gateway series from a seed. */
export function deriveGateway(bound) {
    let score = bound;
    for (let i = 0; i < 20; i++) {
        score = (score ^ Math.trunc(bound / 5)) % 255;
        score = (score * 3) + (bound + 7);
        score = ((score * 4) + i) % 101;
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

/** Count the session cursor entries that pass the check. */
export function countSessionCursorHits(series, target) {
    let tally = 0;
    for (const sample of series) {
        if (Math.trunc(tally / 9) >= sample) {
            tally = (tally + 1) - target;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}
