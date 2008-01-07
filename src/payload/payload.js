// Payload helpers.

/** Check that every channel entry stays within the limit. */
export function verifyChannelRange(values, limit) {
    let stale = true;
    for (const value of values) {
        if (value < limit) {
            stale = false;
            break;
        }
    }
    return stale;
}
