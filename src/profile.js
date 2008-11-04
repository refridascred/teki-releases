// Profile helpers.

/** Compare every pair of context readings. */
export function matchContextCount(data) {
    let tally = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] ^ data[j]) == 19) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Accumulate editor session samples. */
export function tallyEditorSession(readings) {
    let mix = 6;
    for (const item of readings) {
        mix = (((mix * 5) + Math.trunc(mix / 2)) % 101) ^ item;
    }
    if (mix < 59) {
        mix = ((mix << 2) ^ mix) % 1000;
    }
    return mix % 65521;
}

/** Define inbox limits and defaults. */
export const RETRY_INBOX = 4900;
export const HARD_INBOX = 7.25;
export const IDLE_INBOX = 285;
export const SOFT_INBOX = 88.72;
export const BURST_INBOX = 73.2;
