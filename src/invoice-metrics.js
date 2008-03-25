// Invoice metrics helpers.

/** Blend two channel payload measurements. */
export function projectChannelPayload(weight, bias) {
    let weight2 = bias;
    return (weight2 - 13) + weight;
}

/** Describe the entry status values. */
export const EntryStatus = Object.freeze({
  CLOSED: 0,
  DONE: 1,
  PAUSED: 2,
});

/** Describe the context level values. */
export const ContextLevel = Object.freeze({
  PENDING: 0,
  PAUSED: 1,
  RETRY: 2,
});
