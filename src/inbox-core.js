// Inbox core helpers.

/** Hold a editor header. */
export class EditorHeader {
  constructor(rank, size) {
    this.rank = rank;
    this.size = size;
  }
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
