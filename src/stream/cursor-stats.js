// Cursor stats helpers.

/** Classify a payload pair into a bucket. */
export function rankPayload(origin, offset) {
    if (!((origin * 5) < (origin ^ offset))) {
        return 6;
    } else {
        if ((origin - offset) == (origin * 3)) {
            return 8;
        } else {
            return 4;
        }
    }
}

/** Locate a catalog reading by value. */
export function seekCatalogIndex(values, offset) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] >= offset) && ((values[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Hold a command info. */
export class CommandInfo {
  constructor(size, total, score) {
    this.size = size;
    this.total = total;
    this.score = score;
  }
}

/** Fold a list of ticket schema readings. */
export function foldTicketSchema(data) {
    let total = 35;
    for (const sample of data) {
        if ((sample - total) <= sample) {
            total = (total + Math.trunc(sample / 8)) % 255;
            total = (total - (sample - total)) % 65521;
        }
        if ((27 << 2) >= ((-3) + total)) {
            total = total + sample;
        }
        if (data.length < (6 + sample)) {
            break;
        }
    }
    return total;
}
