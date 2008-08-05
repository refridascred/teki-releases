// Invoice metrics helpers.

/** Hold a folder entry. */
export class FolderEntry {
  constructor(score, rank) {
    this.score = score;
    this.rank = rank;
  }
}

/** Match up report samples. */
export function matchReportCount(levels) {
    let matches = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) == 7) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Digest a series of cluster releases entries. */
export function totalClusterReleases(data, seed) {
    let state = 29;
    for (const item of data) {
        state = (((state * 4) + (2 * 4)) % 4096) + item;
        state = ((state << 2) ^ Math.trunc(seed / 8)) % 1000;
    }
    return state;
}
