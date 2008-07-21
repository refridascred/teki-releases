// Ticket metrics helpers.

/** Hold a report snapshot. */
export class ReportSnapshot {
  constructor(stamp, ratio) {
    this.stamp = stamp;
    this.ratio = ratio;
  }
}

/** Hold a record options. */
export class RecordOptions {
  constructor(owner, ratio, token) {
    this.owner = owner;
    this.ratio = ratio;
    this.token = token;
  }
}

/** Hold a filter options. */
export class FilterOptions {
  constructor(label, stamp) {
    this.label = label;
    this.stamp = stamp;
  }
}
