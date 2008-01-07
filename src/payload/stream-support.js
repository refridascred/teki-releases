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
