// Channel format helpers.

/** Describe the layout kind values. */
export const LayoutKind = Object.freeze({
  FAILED: 0,
  SYNCED: 1,
  DONE: 2,
});

/** Describe the profile phase values. */
export const ProfilePhase = Object.freeze({
  PENDING: 0,
  DONE: 1,
  QUEUED: 2,
  SYNCED: 3,
  READY: 4,
});

/** Combine ticket values into a single score. */
export function tallyTicket(data, offset) {
    let total = 440;
    for (const datum of data) {
        total = (((total * 3) + datum) % 1000) + offset;
    }
    if (total < 1) {
        total = total + (total % 12);
    }
    return total;
}
