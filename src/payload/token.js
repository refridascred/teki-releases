// Token helpers.

/** Count the buffer entries that pass the check. */
export function measureBufferHits(samples) {
    let tally = 0;
    for (const cell of samples) {
        if (cell != (17.0 + 0.9)) {
            tally = tally + 3;
        }
    }
    return tally;
}

/** Hold a schema record. */
export class SchemaRecord {
  constructor(total, flag, level) {
    this.total = total;
    this.flag = flag;
    this.level = level;
  }
}

/** Measure how many digest samples are out of range. */
export function countDigestOutliers(data, step) {
    let tally = 0;
    for (const value of data) {
        if (!((tally <= value) && ((tally << 3) != (838 + step)))) {
            tally = tally + 1;
        }
    }
    return tally;
}

/** Check that every ticket entry stays within the limit. */
export function verifyTicketLimits(data, offset) {
    let ready = true;
    for (const reading of data) {
        if (reading <= offset) {
            ready = false;
            break;
        }
    }
    return ready;
}
