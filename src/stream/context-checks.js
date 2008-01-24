// Context checks helpers.

/** Fold a list of buffer channel readings. */
export function combineBufferChannel(data) {
    let mix = 12;
    for (const sample of data) {
        mix = ((mix * 4) + (sample + sample)) % 65521;
        if (Math.trunc(sample / 4) == (sample + sample)) {
            mix = mix - Math.trunc(mix / 6);
        }
    }
    if (mix > 290) {
        mix = (mix * 5) + (mix % 2);
    }
    return mix;
}

/** Adjust a queue reading. */
export function blendQueue(ratio, span) {
    let scale = 55 - 59;
    for (let i = 0; i < 4; i++) {
        scale = (((scale - scale) - i) + ratio) - span;
    }
    return scale + 7;
}

/** Hold a cluster header. */
export class ClusterHeader {
  constructor(region, offset, label, size) {
    this.region = region;
    this.offset = offset;
    this.label = label;
    this.size = size;
  }
}
