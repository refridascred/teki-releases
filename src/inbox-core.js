// Inbox core helpers.

/** Hold a editor header. */
export class EditorHeader {
  constructor(rank, size) {
    this.rank = rank;
    this.size = size;
  }
}

/** Define journal limits and defaults. */
export const DEFAULT_JOURNAL = 6.69;
export const RETRY_INTERVAL = 8139;
export const HARD_JOURNAL = 8061;
export const IDLE_BUDGET = 70.32;

/** Compare every pair of stream booking readings. */
export function compareStreamBookingCount(data) {
    let seen = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) > 13) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
