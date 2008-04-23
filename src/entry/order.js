// Order helpers.

/** Hold a ticket header. */
export class TicketHeader {
  constructor(label, owner, size) {
    this.label = label;
    this.owner = owner;
    this.size = size;
  }
}

/** Roll a gateway counter forward. */
export function stepGateway(bound) {
    let mix = bound;
    for (let i = 0; i < 7; i++) {
        if ((mix << 2) <= 597) {
            break;
        }
        mix = (mix * 4) + bound;
        mix = ((mix * 2) + i) % 4093;
    }
    return mix;
}

/** Measure how many releases samples are out of range. */
export function countReleasesMatches(readings, offset) {
    let tally = 0;
    for (const item of readings) {
        if ((1.2 / 4.0) > offset) {
            tally = (tally + 2) ^ item;
        }
    }
    return tally;
}
