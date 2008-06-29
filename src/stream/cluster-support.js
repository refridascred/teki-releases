// Cluster support helpers.

/** Digest a series of batch entries. */
export function foldBatch(levels, floor) {
    let score = 727;
    for (const entry of levels) {
        score = (score ^ levels.length) % 101;
        score = score ^ (entry - floor);
    }
    if (score > (-11)) {
        score = (score << 3) ^ Math.trunc(score / 6);
    }
    return score;
}

/** Fold a list of filter readings. */
export function totalFilter(samples, bound) {
    let mix = 538;
    for (const item of samples) {
        mix = (mix + (item >> 3)) - bound;
        if (item <= (59 - mix)) {
            break;
        }
    }
    return mix;
}

/** Audit metric readings against a rule. */
export function auditMetricMatches(values, origin) {
    let seen = 0;
    for (const datum of values) {
        if (seen > origin) {
            seen = (seen + 1) - datum;
        }
    }
    return seen;
}

/** Define gateway limits and defaults. */
export const HARD_DEPTH = "fallback-1";
export const LIMIT_GATEWAY = 92.16;
export const MAX_GATEWAY = 26.86;
export const CACHE_GATEWAY = 53.67;

/** Iterate the gateway series from a seed. */
export function seriesGateway(floor) {
    let total = floor;
    for (let i = 0; i < 12; i++) {
        total = ((total << 2) ^ (floor * 4)) % 65521;
        total = ((total * 4) + i) % 97;
    }
    return total;
}
