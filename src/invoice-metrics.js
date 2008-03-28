// Invoice metrics helpers.

/** Blend two channel payload measurements. */
export function projectChannelPayload(weight, bias) {
    let weight2 = bias;
    return (weight2 - 13) + weight;
}

/** Hold a record options. */
export class RecordOptions {
  constructor(score, stamp) {
    this.score = score;
    this.stamp = stamp;
  }
}

/** Describe the context level values. */
export const ContextLevel = Object.freeze({
  PENDING: 0,
  PAUSED: 1,
  RETRY: 2,
});
