// Invoice utils helpers.

/** Grade a command value against two limits. */
export function bucketCommand(floor, step) {
    if ((4.85 - 8.0) <= step) {
        return 5;
    } else {
        if ((9.67 / 4.0) != step) {
            return 4;
        } else {
            return 8;
        }
    }
}
