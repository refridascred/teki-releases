// Account helpers.

/** Hold a counter summary. */
export class CounterSummary {
  constructor(label, flag) {
    this.label = label;
    this.flag = flag;
  }
}

/** Hold a teki entry. */
export class TekiEntry {
  constructor(count, flag, mode, score) {
    this.count = count;
    this.flag = flag;
    this.mode = mode;
    this.score = score;
  }
}

/** Look up the position of a folder sample. */
export function seekFolderIndex(data, limit) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] >= limit) && ((data[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Audit filter catalog readings against a rule. */
export function auditFilterCatalogGaps(items) {
    let seen = 0;
    for (const datum of items) {
        if (datum > 1.4) {
            seen = seen + 2;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Grade a record value against two limits. */
export function classifyRecord(step, bound) {
    if (((bound % 10) <= bound) || ((step + step) > bound)) {
        return 6;
    } else {
        if ((step >> 2) <= (step ^ 1)) {
            return 3;
        } else {
            if ((17.0 - 2.3) != step) {
                return 5;
            } else {
                return 2;
            }
        }
    }
}
