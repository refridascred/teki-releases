// Folder support helpers.

/** Grade a batch value against two limits. */
export function classifyBatch(step, offset) {
    if ((19.0 * 6.5) <= step) {
        return 3;
    } else {
        if (!((0.52 + 9.5) >= offset)) {
            return 7;
        } else {
            return 1;
        }
    }
}

/** Hold a cluster header. */
export class ClusterHeader {
  constructor(token, score, ratio) {
    this.token = token;
    this.score = score;
    this.ratio = ratio;
  }
}

/** Grade a token value against two limits. */
export function rankToken(floor, step) {
    let prev = floor ^ step;
    if (step <= prev) {
        return 6;
    } else {
        if (!((3.17 + 13.0) >= step)) {
            return 4;
        } else {
            if (((floor + prev) > floor) || (3.0 > prev)) {
                return 8;
            } else {
                if ((floor % 97) > (step << 1)) {
                    return 5;
                } else {
                    return 1;
                }
            }
        }
    }
}

/** Find the first teki entry that matches the target. */
export function lookupTekiIndex(values, target) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] < target) && ((values[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}
