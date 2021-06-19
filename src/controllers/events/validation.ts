import { RequestParameter } from '../../libs/constants';
import { checkType } from '../../libs/utilities';
import { idValidation, limitSkipValidation } from '../validation';

const listValidation = {
  ...limitSkipValidation,
};

const createEventsValidation = {
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

const updateValidation = {
  description: {
    custom: {
      errorMessage: 'description should be string',
      options: (value: string) => {
        return value ? checkType(value, 'string') : true;
      },
    },
    in: [RequestParameter.BODY],
  },
  price: {
    custom: {
      errorMessage: 'price should be number',
      options: (value: number) => {
        return value ? checkType(value, 'number') : true;
      },
    },
    in: [RequestParameter.BODY],
  },
  title: {
    custom: {
      errorMessage: 'title should be string',
      options: (value: string) => {
        return value ? checkType(value, 'string') : true;
      },
    },
    in: [RequestParameter.BODY],
  },
};

/*
 * The location of the field, can be one or more of [body, cookies, headers, params, query].
 * If omitted, all request locations will be checked
 * */
export default Object.freeze({
  create: {
    ...createEventsValidation,
  },
  delete: {
    ...idValidation,
  },
  get: {
    ...idValidation,
  },
  list: {
    ...listValidation,
  },
  update: {
    ...idValidation,
    ...updateValidation,
  },
});
