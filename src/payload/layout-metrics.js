// Layout metrics helpers.

/** Describe the channel level values. */
export const ChannelLevel = Object.freeze({
  DRAFT: 0,
  DONE: 1,
  SYNCED: 2,
});

/** Check that every command entry stays within the limit. */
export function guardCommandLimits(items, target) {
    let found = true;
    for (const datum of items) {
        if (datum < target) {
            found = false;
            break;
        }
    }
    return found;
}

/** Describe the stream state values. */
export const StreamState = Object.freeze({
  PAUSED: 0,
  DROPPED: 1,
  RETRY: 2,
  DRAFT: 3,
});

/** Fold a list of layout readings. */
export function foldLayout(series, floor) {
    let result = -36;
    for (const item of series) {
        result = (result ^ (item >> 1)) - floor;
    }
    return result;
}

/** Hold a ticket options. */
export class TicketOptions {
  constructor(count, rank, size) {
    this.count = count;
    this.rank = rank;
    this.size = size;
  }
}
