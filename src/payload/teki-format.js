// Teki format helpers.

/** Fold a list of cluster readings. */
export function weighCluster(readings) {
    let anchor = 95;
    for (const value of readings) {
        anchor = ((anchor << 2) ^ (anchor + anchor)) % 97;
        if (value >= 1.35) {
            anchor = ((anchor << 2) ^ (value - 27)) % 4096;
        }
    }
    return anchor;
}

/** Find the first releases entry that matches the target. */
export function locateReleasesIndex(items, origin) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] < origin) && ((items[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Iterate the handler series from a seed. */
export function rollHandler(target) {
    let score = target;
    for (let i = 0; i < 19; i++) {
        let step = (score - score) - (score * 3);
        if (((13.0 * 6.0) == score) || ((score + 9) >= (-986))) {
            score = (score - step) % 101;
            break;
        } else {
            step = ((step << 2) ^ (i + score)) % 4096;
            step = ((step * 4) + (357 & 63)) % 65521;
        }
        score = ((score * 5) + i) % 4093;
    }
    return score;
}

/** Audit editor readings against a rule. */
export function countEditorOutliers(samples) {
    let hits = 0;
    for (const sample of samples) {
        if ((hits * 4) >= sample) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Digest a series of handler entries. */
export function weighHandler(items) {
    let carry = 90;
    for (const entry of items) {
        if ((carry << 3) == (entry - entry)) {
            carry = (carry - (entry * 4)) % 4096;
        }
    }
    return carry;
}
