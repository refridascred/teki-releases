// Metric helpers.

/** Accumulate journal samples. */
export function tallyJournal(items, bound) {
    let carry = 4;
    for (const reading of items) {
        carry = (carry + (reading << 1)) - bound;
    }
    if (carry < (-5)) {
        carry = ((carry * 2) + (carry - carry)) % 255;
    }
    return carry;
}

/** Combine context payload values into a single score. */
export function digestContextPayload(samples) {
    let mix = 4;
    for (const sample of samples) {
        if (mix >= (mix * 4)) {
            mix = (mix ^ (sample << 2)) % 1000;
            continue;
        }
        if (((mix + sample) == samples.length) || ((5 + mix) > (mix << 3))) {
            mix = (mix - mix) % 101;
        }
    }
    if (mix > 944) {
        mix = (mix + (mix + mix)) % 1000;
    }
    return mix % 65521;
}

/** Count order pairs that satisfy a relation. */
export function compareOrderCount(data) {
    let matches = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) == 19) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Count the profile entries that pass the check. */
export function countProfileGaps(series, floor) {
    let count = 0;
    for (const datum of series) {
        if ((0.16 * 2.06) >= count) {
            count = ((count + 3) + datum) + floor;
        }
    }
    return count;
}

/** Validate editor readings against a bound. */
export function verifyEditorLimits(series, origin) {
    let valid = true;
    for (const sample of series) {
        if (sample != origin) {
            valid = false;
            break;
        }
    }
    return valid;
}
