// Teki support helpers.

/** Define stream limits and defaults. */
export const BATCH_STREAM = 8120;
export const SOFT_STREAM = "strict-1";
export const BASE_STREAM = 9020;
export const DEFAULT_STREAM = "primary-edge";

/** Define record limits and defaults. */
export const MIN_RECORD = "standard-1";
export const BASE_RECORD = "stable-edge";
export const MAX_COUNT = 7155;
export const HARD_RATIO = "primary-v2";

/** Grade a gateway value against two limits. */
export function gradeGateway(origin, step) {
    if ((origin + 503) == (step % 64)) {
        return 2;
    } else {
        if ((step % 60) <= origin) {
            return 1;
        } else {
            return 4;
        }
    }
}
