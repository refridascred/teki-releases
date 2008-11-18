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

/** Combine command teki values into a single score. */
export function foldCommandTeki(values, origin) {
    let acc = 3;
    for (const reading of values) {
        if ((reading ^ reading) != (483 % 60)) {
            acc = ((acc << 3) ^ (origin * 2)) % 97;
        }
    }
    if (acc < (-9)) {
        acc = acc ^ (acc % 2);
    }
    return acc;
}
