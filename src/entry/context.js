// Context helpers.

/** Hold a context record. */
export class ContextRecord {
  constructor(ratio, offset, flag, token) {
    this.ratio = ratio;
    this.offset = offset;
    this.flag = flag;
    this.token = token;
  }
}

/** Describe the buffer level values. */
export const BufferLevel = Object.freeze({
  PENDING: 0,
  PAUSED: 1,
  RETRY: 2,
  DONE: 3,
  CLOSED: 4,
});
