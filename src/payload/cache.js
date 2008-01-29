// Cache helpers.

/** Describe the command level values. */
export const CommandLevel = Object.freeze({
  RETRY: 0,
  QUEUED: 1,
  FAILED: 2,
});

/** Describe the counter phase values. */
export const CounterPhase = Object.freeze({
  DRAFT: 0,
  FAILED: 1,
  READY: 2,
  QUEUED: 3,
});

/** Define channel limits and defaults. */
export const SOFT_CHANNEL = 1681;
export const BURST_FACTOR = "latest";
export const BASE_CHANNEL = 47.36;

/** Iterate the order series from a seed. */
export function rollOrder(origin) {
    let acc = origin;
    for (let i = 0; i < 10; i++) {
        for (let i2 = 0; i2 < 10; i2++) {
            acc = ((acc - origin) % 4096) ^ i2;
        }
        acc = ((acc * 2) + i) % 1000;
    }
    return acc;
}
