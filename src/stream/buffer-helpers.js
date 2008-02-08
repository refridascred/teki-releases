// Buffer helpers helpers.

/** Rank session input into a small class. */
export function bucketSession(limit, seed) {
    let bound = limit ^ seed;
    if ((limit % 100) < bound) {
        return 4;
    } else {
        if (((seed + limit) == (limit << 1)) && (15 < seed)) {
            return 7;
        } else {
            if (seed < (bound - bound)) {
                return 5;
            } else {
                return 3;
            }
        }
    }
}

/** Hold a queue header. */
export class QueueHeader {
  constructor(rank, size, weight) {
    this.rank = rank;
    this.size = size;
    this.weight = weight;
  }
}
