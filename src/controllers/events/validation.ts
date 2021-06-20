import * as moment from 'moment';

import { RequestParameter } from '../../libs/constants';
import { checkType } from '../../libs/utilities';

const getFreeSlots = {
  date: {
    custom: {
      errorMessage: 'date should be in YYYY-MM-DD format!',
      options: (value: string) => {
        return moment(value, 'YYYY-MM-DD', true).isValid();
      },
    },
    exists: {
      errorMessage: 'Please Provide date!',
    },
    in: [RequestParameter.QUERY],
  },
  timezone: {
    custom: {
      errorMessage: 'timezone is not valid!',
      options: (value: string) => {
        return !!moment.tz.zone(value);
      },
    },
    exists: {
      errorMessage: 'Please Provide timezone!',
    },
    in: [RequestParameter.QUERY],
  },
};

const createEvents = {
  dateTime: {
    custom: {
      errorMessage: 'dateTime should be in ISO string!',
      options: (value: string) => {
        if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(value)) {
          return false;
        }
        const d = new Date(value);
        return d.toISOString() === value;
      },
    },
    exists: {
      errorMessage: 'Please Provide dateTime!',
    },
    in: [RequestParameter.BODY],
  },
  duration: {
    custom: {
      errorMessage: 'duration should be integer!',
      options: (value: number) => {
        return checkType(value, 'number');
      },
    },
    exists: {
      errorMessage: 'Please Provide duration!',
    },
    in: [RequestParameter.BODY],
  },
};

const getBookedEvents = {
  endDate: {
    custom: {
      errorMessage: 'endDate should be in YYYY-MM-DD format!',
      options: (value: string) => {
        return moment(value, 'YYYY-MM-DD', true).isValid();
      },
    },
    exists: {
      errorMessage: 'Please Provide endDate!',
    },
    in: [RequestParameter.BODY],
  },
  startDate: {
    custom: {
      errorMessage: 'startDate should be in YYYY-MM-DD format!',
      options: (value: string) => {
        return moment(value, 'YYYY-MM-DD', true).isValid();
      },
    },
    exists: {
      errorMessage: 'Please Provide startDate!',
    },
    in: [RequestParameter.BODY],
  },
};

/*
 * The location of the field, can be one or more of [body, cookies, headers, params, query].
 * If omitted, all request locations will be checked
 * */
export default Object.freeze({
  createEvents,
  getBookedEvents,
  getFreeSlots,
});
