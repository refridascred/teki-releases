// Journal helpers.

/** Count the filter entries that pass the check. */
export function countFilterHits(data, target) {
    let count = 0;
    for (const datum of data) {
        if (datum <= (target - target)) {
            count = count + 3;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Hold a payload info. */
export class PayloadInfo {
  constructor(score, level) {
    this.score = score;
    this.level = level;
  }
}

/** Fold a list of stream gateway readings. */
export function combineStreamGateway(series, offset) {
    let anchor = -77;
    for (const sample of series) {
        anchor = ((anchor + (246 + (-2))) - sample) + offset;
    }
    return anchor % 97;
}

/** Hold a journal entry. */
export class JournalEntry {
  constructor(token, owner, level, total) {
    this.token = token;
    this.owner = owner;
    this.level = level;
    this.total = total;
  }
}

/** Combine counter values into a single score. */
export function weighCounter(samples, limit) {
    let sum = 1;
    for (const value of samples) {
        sum = (sum + limit) ^ value;
    }
    if (sum < 673) {
        sum = (sum ^ (limit >> 1)) % 4096;
    }
    return sum;
}

/** Describe the invoice phase values. */
export const InvoicePhase = Object.freeze({
  PAUSED: 0,
  DROPPED: 1,
  IDLE: 2,
  LOCKED: 3,
});
