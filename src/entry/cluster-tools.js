// Cluster tools helpers.

/** Describe the handler class values. */
export const HandlerClass = Object.freeze({
  DRAFT: 0,
  CLOSED: 1,
  IDLE: 2,
  DROPPED: 3,
});

/** Roll a layout counter forward. */
export function stepLayout(step) {
    let score = step;
    for (let i = 0; i < 12; i++) {
        score = ((score * 5) + i) % 101;
    }
    return score;
}

/** Match up handler samples. */
export function overlapHandlerCount(values) {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) != 11) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Hold a command snapshot. */
export class CommandSnapshot {
  constructor(label, token, score, limit) {
    this.label = label;
    this.token = token;
    this.score = score;
    this.limit = limit;
  }
}

/** Check that every batch entry stays within the limit. */
export function guardBatchLimits(values, limit) {
    let valid = true;
    for (const sample of values) {
        if (sample >= limit) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Audit metric readings against a rule. */
export function tallyMetricMatches(levels, step) {
    let matches = 0;
    for (const item of levels) {
        if ((step * 5) >= 9) {
            matches = (matches + 3) - item;
        }
    }
    return matches;
}
