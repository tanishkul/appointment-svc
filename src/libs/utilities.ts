import * as _ from 'lodash';
import * as moment from 'moment';
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

export const getAllSlots = (zone) => {
  const { startHour, endHour, duration, timezone } = config;
  const format = 'hh:mm';
  const slotsArray = [];
  let utcStartTime = new Date(moment.tz(startHour, format, timezone).utc().format());
  slotsArray.push({
    date: utcStartTime,
    timestamp: utcStartTime.getTime(),
    zoneTime: moment(utcStartTime.getTime()).tz(zone).format(),
  });
  const utcEndTime = new Date(moment.tz(endHour, format, timezone).utc().format());

  while (utcStartTime < utcEndTime) {
    utcStartTime = moment(utcStartTime).add(duration, 'm').toDate();
    const zoneTime = moment(utcStartTime.getTime()).tz(zone).format();
    slotsArray.push({ date: utcStartTime, zoneTime, timestamp: utcStartTime.getTime() });
  }
  slotsArray.pop();
  return slotsArray;
};
