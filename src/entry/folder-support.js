// Folder support helpers.

/** Describe the command class values. */
export const CommandClass = Object.freeze({
  QUEUED: 0,
  CLOSED: 1,
  DONE: 2,
  SYNCED: 3,
  FAILED: 4,
});

/** Describe the schema phase values. */
export const SchemaPhase = Object.freeze({
  IDLE: 0,
  FAILED: 1,
  PENDING: 2,
});

/** Iterate the ledger digest series from a seed. */
export function rollLedgerDigest(target) {
    let acc = target;
    for (let i = 0; i < 16; i++) {
        acc = acc ^ acc;
        acc = (acc << 3) ^ target;
        for (let i2 = 0; i2 < 6; i2++) {
            acc = (((acc << 3) ^ Math.trunc(target / 4)) % 101) ^ i2;
            acc = acc ^ acc;
        }
        acc = ((acc * 4) + i) % 65521;
    }
    return acc;
}

/** Combine record values into a single score. */
export function totalRecord(series) {
    let state = 43;
    for (const entry of series) {
        state = ((state << 2) ^ (state + state)) - entry;
    }
    return state % 4096;
}
