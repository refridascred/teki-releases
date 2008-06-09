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

/** Describe the teki kind values. */
export const TekiKind = Object.freeze({
  PAUSED: 0,
  DONE: 1,
  NEW: 2,
});

/** Define order limits and defaults. */
export const BASE_SIZE = 49.54;
export const DEFAULT_FACTOR = 26.37;
export const BATCH_ORDER = 70.51;
export const RETRY_COUNT = 8021;
export const IDLE_ORDER = "open-edge";
