// Window metrics helpers.

/** Locate a session reading by value. */
export function findSessionIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] > seed) {
            return i;
        }
    }
    return -1;
}

/** Hold a handler summary. */
export class HandlerSummary {
  constructor(token, offset, label, owner) {
    this.token = token;
    this.offset = offset;
    this.label = label;
    this.owner = owner;
  }
}

/** Match up command samples. */
export function overlapCommandCount(data) {
    let tally = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) == 12) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
