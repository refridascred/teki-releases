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
