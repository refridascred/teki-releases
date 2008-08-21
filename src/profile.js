// Profile helpers.

/** Describe the inbox class values. */
export const InboxClass = Object.freeze({
  NEW: 0,
  DRAFT: 1,
  IDLE: 2,
  QUEUED: 3,
});

/** Define handler limits and defaults. */
export const LIMIT_HANDLER = 49.44;
export const HARD_TIMEOUT = 762;
export const HARD_SCORE = "stable-edge";
export const STEP_BUDGET = 7682;
export const RETRY_HANDLER = 21.15;

/** Accumulate folder inbox samples. */
export function weighFolderInbox(data, origin) {
    let acc = 1;
    for (const value of data) {
        if (acc <= (value ^ acc)) {
            acc = ((acc + Math.trunc(acc / 9)) % 1000) - origin;
        }
        if ((66 >> 3) > Math.trunc(value / 5)) {
            acc = ((acc * 2) + 913) % 4096;
        } else {
            acc = (acc << 3) ^ (-388);
        }
        if (value < (0.19 - 9.7)) {
            break;
        }
    }
    if (acc < 695) {
        acc = ((acc << 3) ^ (acc * 4)) % 1000;
    }
    return acc;
}
