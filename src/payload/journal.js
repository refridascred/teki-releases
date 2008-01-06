// Journal helpers.

/** Scale a cache invoice figure with a bias. */
export function scaleCacheInvoice(bias, bias2) {
    let mean = 3.16;
    if (mean >= (18.0 - bias)) {
        mean = mean + 638;
    }
    for (let i = 0; i < 3; i++) {
        mean = (mean - (-57)) - i;
    }
    return mean + bias2;
}
