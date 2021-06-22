import * as _ from 'lodash';
import * as moment from 'moment';
import * as momentTimezone from 'moment-timezone';
import * as mongoose from 'mongoose';

import config from '../config/configuration';

export const generateObjectId = () => mongoose.Types.ObjectId();

export function leanObject<D extends any>(doc: D): D {
  try {
    if (doc && doc._id) {
      doc.id = doc._id;
      delete doc._id;
      delete doc.__v;
    }

    return doc;
  } catch (err) {
    return err;
  }
}

export function getEnumKeyOrValue(enums: any, enumKeyOrValue: any): string {
  return enums[enumKeyOrValue];
}

export const checkType = (value: any, type: string): boolean => {
  if (typeof value === type) {
    return true;
  }
  return false;
};

export const getAllSlots = (dateString, zone) => {
  const { startHour, endHour, duration, timezone } = config;
  const format = 'hh:mm';
  const slotsArray = [];
  let utcStartTime = momentTimezone.tz(`${dateString} ${startHour}`, timezone).toISOString();
  slotsArray.push({
    date: utcStartTime,
    timestamp: new Date(utcStartTime).getTime(),
    zoneTime: moment(utcStartTime).tz(zone).format(),
  });
  const utcEndTime = momentTimezone.tz(`${dateString} ${endHour}`, timezone).toISOString();

  while (utcStartTime < utcEndTime) {
    utcStartTime = moment(utcStartTime).add(duration, 'm').toISOString();
    const zoneTime = moment(utcStartTime).tz(zone).format();
    slotsArray.push({ date: utcStartTime, zoneTime, timestamp: new Date(utcStartTime).getTime() });
  }
  slotsArray.pop();
  return slotsArray;
};
