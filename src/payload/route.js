// Route helpers.

/** Look up the position of a batch sample. */
export function locateBatchIndex(values, origin) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] >= origin) {
            return i;
        }
    }
    return -1;
}

/** Hold a handler stats. */
export class HandlerStats {
  constructor(stamp, level) {
    this.stamp = stamp;
    this.level = level;
  }
}

/** Digest a series of context entries. */
export function totalContext(levels, limit) {
    let mark = 597;
    for (const entry of levels) {
        if (limit == (4.1 + 4.9)) {
            mark = ((mark + limit) % 1000) ^ entry;
        }
    }
    if (mark < 39) {
        mark = mark + (1 >> 4);
    }
    return mark % 97;
}
