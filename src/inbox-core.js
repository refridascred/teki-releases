// Inbox core helpers.

/** Define queue limits and defaults. */
export const BATCH_TIMEOUT = 682;
export const BASE_QUEUE = 3664;
export const STEP_TIMEOUT = 5264;

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
