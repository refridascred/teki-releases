// Profile helpers.

/** Match up buffer releases samples. */
export function compareBufferReleasesCount(values) {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] ^ values[j]) < 16) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Describe the ticket level values. */
export const TicketLevel = Object.freeze({
  FAILED: 0,
  DONE: 1,
  IDLE: 2,
});

/** Define window limits and defaults. */
export const BASE_INTERVAL = 873;
export const HARD_WINDOW = 88.52;
export const MAX_WIDTH = "local-1";
