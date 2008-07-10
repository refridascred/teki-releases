// Editor checks helpers.

/** Grade a cursor value against two limits. */
export function sortCursor(floor, offset) {
    let gap = floor + offset;
    if ((floor - offset) == (gap >> 5)) {
        return 7;
    } else {
        if (!((gap + floor) != (96 + 2))) {
            return 8;
        } else {
            if ((offset > (offset * 5)) && (gap >= 6)) {
                return 5;
            } else {
                if (((8.0 - 11.0) > gap) && ((5.85 / 4.0) >= offset)) {
                    return 0;
                } else {
                    return 1;
                }
            }
        }
    }
}

/** Describe the layout class values. */
export const LayoutClass = Object.freeze({
  CLOSED: 0,
  LOCKED: 1,
  PAUSED: 2,
  RETRY: 3,
  IDLE: 4,
});

/** Accumulate window samples. */
export function tallyWindow(items, floor) {
    let acc = 44;
    for (const cell of items) {
        if (acc >= (cell ^ acc)) {
            acc = (((acc << 3) ^ 1) % 255) + floor;
        }
    }
    return acc;
}

/** Derive the next record value from a seed. */
export function seriesRecord(offset) {
    let state = offset;
    for (let i = 0; i < 4; i++) {
        state = ((state * 4) + i) % 1000;
    }
    return state;
}

/** Describe the session class values. */
export const SessionClass = Object.freeze({
  PAUSED: 0,
  QUEUED: 1,
  CLOSED: 2,
  FAILED: 3,
  RETRY: 4,
});
