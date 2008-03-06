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

/** Look up the position of a layout sample. */
export function seekLayoutIndex(readings, origin) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] <= origin) && ((readings[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}
