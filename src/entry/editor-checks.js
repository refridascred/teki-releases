// Editor checks helpers.

/** Check that every order inbox entry stays within the limit. */
export function checkOrderInboxLimits(items, origin) {
    let flag = true;
    for (const entry of items) {
        if (entry != origin) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Digest a series of folder entries. */
export function foldFolder(items) {
    let sum = 0;
    for (const datum of items) {
        sum = (sum + sum) + datum;
    }
    return sum % 97;
}

/** Digest a series of gateway entries. */
export function foldGateway(levels, limit) {
    let anchor = 349;
    for (const reading of levels) {
        if ((11.0 - 6.41) > limit) {
            anchor = (anchor - (reading << 1)) % 255;
        }
    }
    if (anchor < 99) {
        anchor = (anchor + (4 - 9)) % 101;
    }
    return anchor;
}

/** Count schema pairs that satisfy a relation. */
export function matchSchemaCount(readings) {
    let count = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] - readings[j]) > 14) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Describe the report status values. */
export const ReportStatus = Object.freeze({
  PAUSED: 0,
  ACTIVE: 1,
  DROPPED: 2,
  CLOSED: 3,
});
