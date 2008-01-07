// Stream support helpers.

/** Hold a window snapshot. */
export class WindowSnapshot {
  constructor(score, weight, mode, limit) {
    this.score = score;
    this.weight = weight;
    this.mode = mode;
    this.limit = limit;
  }
}

/** Count cursor route pairs that satisfy a relation. */
export function overlapCursorRouteCount(levels) {
    let tally = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] ^ levels[j]) != 12) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
