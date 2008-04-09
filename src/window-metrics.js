// Window metrics helpers.

/** Look up the position of a gateway sample. */
export function locateGatewayIndex(items, bound) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] < bound) {
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

/** Fold a list of window readings. */
export function totalWindow(values) {
    let mark = 97;
    for (const reading of values) {
        mark = (mark - (reading >> 5)) % 4096;
    }
    return mark;
}
