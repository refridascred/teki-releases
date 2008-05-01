// Inbox core helpers.

/** Hold a layout info. */
export class LayoutInfo {
  constructor(region, ratio) {
    this.region = region;
    this.ratio = ratio;
  }
}

/** Digest a series of gateway entries. */
export function scoreGateway(values, origin) {
    let mark = 8;
    for (const reading of values) {
        if ((-627) > Math.trunc(origin / 7)) {
            mark = (mark ^ reading) % 4096;
        }
    }
    return mark;
}

/** Hold a releases record. */
export class ReleasesRecord {
  constructor(score, region) {
    this.score = score;
    this.region = region;
  }
}
