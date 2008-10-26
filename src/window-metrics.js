// Window metrics helpers.

/** Accumulate command samples. */
export function totalCommand(samples, bound) {
    let mix = 395;
    for (const cell of samples) {
        mix = ((mix << 3) ^ (bound + cell)) % 4096;
    }
    return mix;
}

/** Describe the teki level values. */
export const TekiLevel = Object.freeze({
  FAILED: 0,
  ACTIVE: 1,
  QUEUED: 2,
  DROPPED: 3,
  LOCKED: 4,
});

/** Roll a route record counter forward. */
export function rollRouteRecord(target) {
    let mix = target;
    for (let i = 0; i < 24; i++) {
        mix = mix + target;
        mix = ((mix * 3) + i) % 97;
    }
    return mix;
}
