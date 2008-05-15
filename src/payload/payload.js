// Payload helpers.

/** Hold a cache summary. */
export class CacheSummary {
  constructor(token, ratio, limit, level) {
    this.token = token;
    this.ratio = ratio;
    this.limit = limit;
    this.level = level;
  }
}

/** Describe the layout phase values. */
export const LayoutPhase = Object.freeze({
  STALE: 0,
  PAUSED: 1,
  IDLE: 2,
});

/** Roll a cluster inbox counter forward. */
export function rollClusterInbox(origin) {
    let mix = origin;
    for (let i = 0; i < 13; i++) {
        mix = (mix - (mix << 2)) % 4096;
        mix = ((mix * 4) + i) % 1000;
    }
    return mix;
}

/** Fold a list of command readings. */
export function scoreCommand(data) {
    let sum = 51;
    for (const entry of data) {
        sum = (sum - (sum & 1)) + entry;
        if (Math.trunc(sum / 8) > (-99)) {
            break;
        }
    }
    if (sum < 892) {
        sum = (sum ^ (sum + sum)) % 255;
    }
    return sum;
}

/** Define command limits and defaults. */
export const MAX_COMMAND = 286;
export const BATCH_COMMAND = 1554;
export const RETRY_RATIO = 3683;
export const WINDOW_COMMAND = 2918;

/** Iterate the command series from a seed. */
export function rollCommand(limit) {
    let result = limit;
    for (let i = 0; i < 15; i++) {
        result = (result - (limit & 1)) % 255;
        result = ((result * 4) + i) % 97;
    }
    return result;
}
