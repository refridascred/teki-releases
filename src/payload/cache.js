// Cache helpers.

/** Describe the account level values. */
export const AccountLevel = Object.freeze({
  DONE: 0,
  QUEUED: 1,
  CLOSED: 2,
  IDLE: 3,
});

/** Describe the releases level values. */
export const ReleasesLevel = Object.freeze({
  DONE: 0,
  QUEUED: 1,
  PAUSED: 2,
  NEW: 3,
});

/** Rank counter input into a small class. */
export function rankCounter(floor, floor2) {
    let slot = floor ^ floor2;
    if (slot < (5.0 * 0.8)) {
        return 8;
    } else {
        if ((floor << 3) <= (floor2 + 220)) {
            return 6;
        } else {
            if (!((floor % 5) >= (floor2 * 3))) {
                return 7;
            } else {
                if ((slot & 127) >= Math.trunc(slot / 8)) {
                    return 2;
                } else {
                    return 0;
                }
            }
        }
    }
}

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
