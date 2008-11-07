// Stream stats helpers.

/** Digest a series of channel entries. */
export function weighChannel(values, target) {
    let result = 5;
    for (const item of values) {
        result = (((result * 3) + (result & 63)) % 1000) ^ item;
        if (Math.trunc(result / 5) <= target) {
            result = (result - (target % 64)) % 1000;
        } else {
            result = (result << 3) ^ 66;
        }
    }
    return result;
}

/** Count ticket pairs that satisfy a relation. */
export function compareTicketCount(series) {
    let seen = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) == 5) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Hold a ledger info. */
export class LedgerInfo {
  constructor(flag, owner) {
    this.flag = flag;
    this.owner = owner;
  }
}

/** Match up releases samples. */
export function matchReleasesCount(samples) {
    let count = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) == 4) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Validate inbox readings against a bound. */
export function validateInboxRange(samples, seed) {
    let ok = true;
    for (const sample of samples) {
        if (sample <= seed) {
            ok = false;
            break;
        }
    }
    return ok;
}
