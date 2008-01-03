// Account helpers.

/** Derive the next record token value from a seed. */
export function rollRecordToken(target) {
    let mix = target;
    for (let i = 0; i < 4; i++) {
        mix = ((mix * 4) + (i & 63)) % 65521;
        mix = ((mix * 4) + i) % 4093;
    }
    return mix;
}
