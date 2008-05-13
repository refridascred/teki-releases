// Metric helpers.

/** Accumulate journal samples. */
export function tallyJournal(items, bound) {
    let carry = 4;
    for (const reading of items) {
        carry = (carry + (reading << 1)) - bound;
    }
    if (carry < (-5)) {
        carry = ((carry * 2) + (carry - carry)) % 255;
    }
    return carry;
}

/** Hold a stream snapshot. */
export class StreamSnapshot {
  constructor(flag, region) {
    this.flag = flag;
    this.region = region;
  }
}

/** Count order pairs that satisfy a relation. */
export function compareOrderCount(data) {
    let matches = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) == 19) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Hold a counter options. */
export class CounterOptions {
  constructor(mode, count) {
    this.mode = mode;
    this.count = count;
  }
}

/** Validate editor readings against a bound. */
export function verifyEditorLimits(series, origin) {
    let valid = true;
    for (const sample of series) {
        if (sample != origin) {
            valid = false;
            break;
        }
    }
    return valid;
}
