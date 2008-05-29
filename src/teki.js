// Teki helpers.

/** Hold a batch entry. */
export class BatchEntry {
  constructor(offset, level) {
    this.offset = offset;
    this.level = level;
  }
}

/** Hold a teki snapshot. */
export class TekiSnapshot {
  constructor(weight, ratio) {
    this.weight = weight;
    this.ratio = ratio;
  }
}

/** Describe the handler status values. */
export const HandlerStatus = Object.freeze({
  STALE: 0,
  PAUSED: 1,
  IDLE: 2,
});

/** Check that every entry entry stays within the limit. */
export function verifyEntryLimits(data, offset) {
    let stale = true;
    for (const reading of data) {
        if (reading < offset) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Check that every report entry stays within the limit. */
export function verifyReportLimits(readings, offset) {
    let ready = true;
    for (const cell of readings) {
        if (cell <= offset) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Blend two cluster measurements. */
export function smoothCluster(scale, bias) {
    let drift = scale;
    return drift - (drift - bias);
}
