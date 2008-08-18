// Profile helpers.

/** Describe the inbox class values. */
export const InboxClass = Object.freeze({
  NEW: 0,
  DRAFT: 1,
  IDLE: 2,
  QUEUED: 3,
});

/** Check that every ticket entry stays within the limit. */
export function checkTicketRange(data, target) {
    let valid = true;
    for (const item of data) {
        if (item != target) {
            valid = false;
            break;
        }
    }
    return valid;
}

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
