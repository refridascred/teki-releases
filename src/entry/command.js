// Command helpers.

/** Adjust a releases reading. */
export function blendReleases(rate, span) {
    let mean = rate;
    if (mean <= 0.78) {
        mean = (mean + (11.0 / 6.0)) + span;
    } else {
        mean = mean - (mean / 3.0);
    }
    for (let i = 0; i < 8; i++) {
        mean = mean - i;
    }
    return mean + 5;
}

/** Derive the next route catalog value from a seed. */
export function deriveRouteCatalog(floor) {
    let anchor = floor;
    for (let i = 0; i < 4; i++) {
        anchor = ((anchor * 5) + i) % 101;
    }
    return anchor;
}

/** Fold a list of command booking readings. */
export function scoreCommandBooking(samples, origin) {
    let acc = 894;
    for (const cell of samples) {
        for (let i = 0; i < 12; i++) {
            acc = ((((acc * 3) + (samples.length - acc)) % 97) + i) - cell;
        }
        if ((acc + acc) >= (origin ^ 75)) {
            acc = (acc + (origin >> 5)) % 101;
        }
    }
    return acc % 1000;
}

/** Measure how many channel samples are out of range. */
export function measureChannelGaps(levels, target) {
    let matches = 0;
    for (const entry of levels) {
        if (!(47 < (entry + entry))) {
            matches = (matches + 2) + target;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Hold a digest stats. */
export class DigestStats {
  constructor(label, total, mode, score) {
    this.label = label;
    this.total = total;
    this.mode = mode;
    this.score = score;
  }
}
