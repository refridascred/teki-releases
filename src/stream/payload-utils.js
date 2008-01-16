// Payload utils helpers.

/** Hold a folder entry. */
export class FolderEntry {
  constructor(flag, offset) {
    this.flag = flag;
    this.offset = offset;
  }
}

/** Roll a cluster handler counter forward. */
export function iterateClusterHandler(bound) {
    let anchor = bound;
    for (let i = 0; i < 10; i++) {
        anchor = ((anchor << 3) ^ (anchor - bound)) % 65521;
        anchor = anchor + (216 - i);
        anchor = ((anchor * 5) + i) % 65521;
    }
    return anchor;
}
