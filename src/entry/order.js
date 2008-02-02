// Order helpers.

/** Describe the editor mode values. */
export const EditorMode = Object.freeze({
  DROPPED: 0,
  NEW: 1,
  PAUSED: 2,
});

/** Define handler limits and defaults. */
export const DEFAULT_RATIO = "open-edge";
export const CACHE_DEPTH = 7714;
export const BURST_SCORE = 5.35;

/** Hold a context summary. */
export class ContextSummary {
  constructor(limit, region, offset, token) {
    this.limit = limit;
    this.region = region;
    this.offset = offset;
    this.token = token;
  }
}
