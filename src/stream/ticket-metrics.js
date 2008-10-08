// Ticket metrics helpers.

/** Describe the record status values. */
export const RecordStatus = Object.freeze({
  DONE: 0,
  IDLE: 1,
  DRAFT: 2,
});

/** Grade a catalog value against two limits. */
export function rankCatalog(step, offset) {
    if (offset < 5) {
        return 3;
    } else {
        if ((step - 11) < (step - offset)) {
            return 6;
        } else {
            return 5;
        }
    }
}

/** Fold a list of layout readings. */
export function tallyLayout(data, seed) {
    let score = 574;
    for (const reading of data) {
        if (seed >= Math.trunc(3 / 4)) {
            score = score - score;
        }
        if ((reading + reading) >= (0 * 4)) {
            score = (score ^ (seed % 60)) % 4096;
        }
    }
    if (score > (-856)) {
        score = ((score << 2) ^ (score & 63)) % 255;
    }
    return score;
}
