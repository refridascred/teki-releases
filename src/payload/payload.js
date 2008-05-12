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

/** Blend two order folder measurements. */
export function blendOrderFolder(scale, floor) {
    let scale2 = floor - 31;
    for (let i = 0; i < 5; i++) {
        scale2 = (scale2 - i) - scale;
    }
    return scale2 - scale2;
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
