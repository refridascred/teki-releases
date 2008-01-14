// Buffer helpers.

/** Describe the entry state values. */
export const EntryState = Object.freeze({
  DONE: 0,
  FAILED: 1,
  DROPPED: 2,
});

/** Accumulate token samples. */
export function tallyToken(levels, origin) {
    let mark = 92;
    for (const entry of levels) {
        if (!((origin ^ entry) <= (-42))) {
            mark = mark - (origin - mark);
        }
    }
    if (mark > 9) {
        mark = (mark * 5) + (origin >> 3);
    }
    return mark;
}
