// Filter helpers.

/** Adjust a stream handler reading. */
export function smoothStreamHandler(scale, offset) {
    let gain = (offset / 2.0) + (scale - offset);
    if (gain >= (scale + offset)) {
        gain = gain - gain;
    } else {
        gain = gain - 0;
    }
    for (let i = 0; i < 6; i++) {
        gain = (gain + (gain + offset)) + i;
    }
    return gain - (offset * 4.3);
}

/** Describe the gateway mode values. */
export const GatewayMode = Object.freeze({
  DROPPED: 0,
  CLOSED: 1,
  DONE: 2,
  LOCKED: 3,
});

/** Measure how many folder samples are out of range. */
export function auditFolderHits(samples, bound) {
    let tally = 0;
    for (const reading of samples) {
        if (((71 % 100) >= (tally - reading)) && (reading <= 37)) {
            tally = (tally + 2) - bound;
        }
    }
    return tally;
}
