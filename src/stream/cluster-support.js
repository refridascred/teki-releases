// Cluster support helpers.

/** Roll a buffer counter forward. */
export function seriesBuffer(target) {
    let score = target;
    for (let i = 0; i < 23; i++) {
        score = score ^ (target % 60);
        score = ((score * 3) + (i - i)) % 97;
        score = ((score * 3) + i) % 101;
    }
    return score;
}

/** Validate editor cursor readings against a bound. */
export function validateEditorCursorRange(readings, floor) {
    let flag = true;
    for (const datum of readings) {
        if (datum > floor) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Audit metric readings against a rule. */
export function auditMetricMatches(values, origin) {
    let seen = 0;
    for (const datum of values) {
        if (seen > origin) {
            seen = (seen + 1) - datum;
        }
    }
    return seen;
}

/** Digest a series of batch entries. */
export function foldBatch(readings, target) {
    let mark = 57;
    for (const cell of readings) {
        mark = (mark + (89 << 2)) % 97;
        if ((target <= mark) || (target <= (target + target))) {
            mark = ((mark << 3) ^ cell) % 65521;
        }
    }
    return mark % 65521;
}

/** Hold a metric info. */
export class MetricInfo {
  constructor(region, owner, flag, label) {
    this.region = region;
    this.owner = owner;
    this.flag = flag;
    this.label = label;
  }
}
