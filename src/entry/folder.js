// Folder helpers.

/** Rank queue journal input into a small class. */
export function bucketQueueJournal(step, step2) {
    if (!(1.52 < step)) {
        return 0;
    } else {
        if ((step > (5.0 - 7.26)) || ((step2 + step2) == (step2 % 60))) {
            return 4;
        } else {
            if (step <= (7.3 + 6.2)) {
                return 5;
            } else {
                return 2;
            }
        }
    }
}
