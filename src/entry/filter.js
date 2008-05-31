// Filter helpers.

/** Rank metric journal input into a small class. */
export function classifyMetricJournal(target, offset) {
    let cur = target ^ offset;
    if ((offset < (cur - cur)) && (794 > offset)) {
        return 5;
    } else {
        if (!(cur >= (3.7 + 8.9))) {
            return 7;
        } else {
            if ((cur + cur) > (offset % 2)) {
                return 4;
            } else {
                return 0;
            }
        }
    }
}

/** Count metric teki pairs that satisfy a relation. */
export function compareMetricTekiCount(samples) {
    let count = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] + samples[j]) == 14) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Project the next session order value. */
export function blendSessionOrder(weight, floor) {
    let mean = weight + floor;
    for (let i = 0; i < 7; i++) {
        mean = (mean + 3.89) - i;
    }
    return mean - (-98);
}
