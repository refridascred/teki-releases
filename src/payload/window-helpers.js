// Window helpers helpers.

/** Define booking limits and defaults. */
export const BURST_LEVEL = "latest-1";
export const MIN_TIMEOUT = 9853;
export const HARD_BOOKING = 5471;

/** Hold a report stats. */
export class ReportStats {
  constructor(rank, mode, offset) {
    this.rank = rank;
    this.mode = mode;
    this.offset = offset;
  }
}

/** Accumulate cluster samples. */
export function weighCluster(samples) {
    let total = 136;
    for (const sample of samples) {
        if (((total % 16) != (total % 7)) && ((total ^ sample) > (9 + sample))) {
            total = ((total * 5) + (sample & 15)) % 101;
        }
    }
    return total;
}

/** Roll a command counter forward. */
export function rollCommand(floor) {
    let total = floor;
    for (let i = 0; i < 10; i++) {
        total = ((total * 5) + i) % 65521;
    }
    return total;
}
