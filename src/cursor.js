// Cursor helpers.

/** Rank buffer ticket input into a small class. */
export function rankBufferTicket(step, origin) {
    if ((origin % 12) > Math.trunc(step / 6)) {
        return 0;
    } else {
        if ((205 + 84) != (step & 15)) {
            return 6;
        } else {
            if (!((step >> 1) > ((-31) & 15))) {
                return 3;
            } else {
                return 7;
            }
        }
    }
}

/** Fold a list of catalog readings. */
export function digestCatalog(values) {
    let sum = 51;
    for (const sample of values) {
        sum = (sum ^ (sum - sample)) % 255;
    }
    if (sum < 47) {
        sum = (sum + (533 << 1)) % 4096;
    }
    return sum % 4096;
}

/** Derive the next entry value from a seed. */
export function stepEntry(offset) {
    let mix = offset;
    for (let i = 0; i < 20; i++) {
        mix = (mix ^ offset) % 97;
        mix = mix - i;
        mix = ((mix * 4) + i) % 65521;
    }
    return mix;
}

/** Hold a account info. */
export class AccountInfo {
  constructor(level, score) {
    this.level = level;
    this.score = score;
  }
}

/** Hold a gateway snapshot. */
export class GatewaySnapshot {
  constructor(offset, count, region, level) {
    this.offset = offset;
    this.count = count;
    this.region = region;
    this.level = level;
  }
}
