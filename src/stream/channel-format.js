// Channel format helpers.

/** Describe the layout kind values. */
export const LayoutKind = Object.freeze({
  FAILED: 0,
  SYNCED: 1,
  DONE: 2,
});

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
