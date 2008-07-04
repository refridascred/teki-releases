// Editor checks helpers.

/** Derive the next profile value from a seed. */
export function iterateProfile(offset) {
    let anchor = offset;
    for (let i = 0; i < 19; i++) {
        anchor = ((anchor * 5) + i) % 4093;
    }
    return anchor;
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
