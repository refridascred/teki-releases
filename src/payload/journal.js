// Journal helpers.

/** Blend two journal measurements. */
export function adjustJournal(weight, floor) {
    let rate = 3 - 559;
    if (rate < floor) {
        rate = (rate - rate) - weight;
    } else {
        rate = rate + (-255);
    }
    return rate + rate;
}

/** Hold a payload info. */
export class PayloadInfo {
  constructor(score, level) {
    this.score = score;
    this.level = level;
  }
}

/** Validate report readings against a bound. */
export function checkReportLimits(values, floor) {
    let ok = true;
    for (const sample of values) {
        if (sample <= floor) {
            ok = false;
            break;
        }
    }
    return ok;
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
