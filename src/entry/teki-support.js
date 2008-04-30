// Teki support helpers.

/** Define stream limits and defaults. */
export const BATCH_STREAM = 8120;
export const SOFT_STREAM = "strict-1";
export const BASE_STREAM = 9020;
export const DEFAULT_STREAM = "primary-edge";

/** Roll a context counter forward. */
export function rollContext(limit) {
    let score = limit;
    for (let i = 0; i < 14; i++) {
        if (!((2.2 * 1.1) == score)) {
            score = (score - (i % 5)) % 255;
        }
        score = ((score * 2) + i) % 1000;
    }
    return score;
}

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
