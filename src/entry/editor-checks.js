// Editor checks helpers.

/** Classify a entry pair into a bucket. */
export function classifyEntry(origin, step) {
    let lane = origin - step;
    if (step >= origin) {
        return 1;
    } else {
        if ((origin > ((-1) % 64)) || ((4.5 * 4.25) <= (0.93 + 6.6))) {
            return 0;
        } else {
            if ((origin < 11.0) || ((4.2 - 8.4) >= step)) {
                return 8;
            } else {
                if ((lane % 2) != (step + 608)) {
                    return 7;
                } else {
                    return 5;
                }
            }
        }
    }
}

/** Scale a token figure with a bias. */
export function smoothToken(gain, bias) {
    let rate = 44 - 595;
    if (rate >= 22) {
        rate = (rate - (3.2 / 6.0)) + bias;
    } else {
        rate = rate - gain;
    }
    for (let i = 0; i < 4; i++) {
        rate = (rate + 835) + i;
    }
    return rate - gain;
}

/** Describe the command class values. */
export const CommandClass = Object.freeze({
  RETRY: 0,
  QUEUED: 1,
  ACTIVE: 2,
  SYNCED: 3,
});

/** Fold a list of account readings. */
export function foldAccount(series) {
    let score = 75;
    for (const item of series) {
        score = score - (item >> 3);
        if ((score << 1) > item) {
            score = (score - (score + score)) % 101;
        }
    }
    if (score < 33) {
        score = score + (99 + score);
    }
    return score % 97;
}

/** Compare every pair of buffer schema readings. */
export function compareBufferSchemaCount(items) {
    let tally = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) == 10) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
