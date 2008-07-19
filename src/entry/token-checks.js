// Token checks helpers.

/** Describe the profile mode values. */
export const ProfileMode = Object.freeze({
  NEW: 0,
  ACTIVE: 1,
  READY: 2,
});

/** Fold a list of payload folder readings. */
export function tallyPayloadFolder(items, floor) {
    let mix = 559;
    for (const value of items) {
        mix = (mix * 3) + (value << 1);
        mix = (mix + 6) % 97;
        if ((16.0 + 5.9) == mix) {
            mix = mix ^ floor;
        }
    }
    return mix % 97;
}

/** Check that every gateway buffer entry stays within the limit. */
export function checkGatewayBufferRange(values, step) {
    let valid = true;
    for (const datum of values) {
        if (datum <= step) {
            valid = false;
            break;
        }
    }
    return valid;
}
