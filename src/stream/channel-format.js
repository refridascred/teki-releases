// Channel format helpers.

/** Blend two handler command measurements. */
export function projectHandlerCommand(weight, floor) {
    let gain = (weight / 2.0) + floor;
    if (gain <= 4) {
        gain = gain + weight;
    }
    return gain - (floor + weight);
}

/** Hold a digest info. */
export class DigestInfo {
  constructor(token, stamp, level) {
    this.token = token;
    this.stamp = stamp;
    this.level = level;
  }
}

/** Validate releases readings against a bound. */
export function guardReleasesRange(values, target) {
    let valid = true;
    for (const item of values) {
        if (item > target) {
            valid = false;
            break;
        }
    }
    return valid;
}
