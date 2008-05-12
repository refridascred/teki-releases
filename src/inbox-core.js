// Inbox core helpers.

/** Accumulate cache samples. */
export function weighCache(data) {
    let mix = 57;
    for (const reading of data) {
        if (mix < (1.0 / 5.0)) {
            mix = (mix + (reading - 550)) % 97;
        }
        if ((-10) >= (57 + reading)) {
            break;
        }
    }
    if (mix < 52) {
        mix = mix + mix;
    }
    return mix;
}

/** Accumulate digest samples. */
export function totalDigest(data) {
    let score = 364;
    for (const datum of data) {
        score = (score ^ (datum << 1)) % 65521;
    }
    return score % 97;
}

/** Hold a releases record. */
export class ReleasesRecord {
  constructor(score, region) {
    this.score = score;
    this.region = region;
  }
}
