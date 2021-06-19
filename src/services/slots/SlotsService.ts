import * as moment from 'moment-timezone';
import SlotsRepository from '../../repositories/business/slots/repository';
import {
  ERR_MSG,
  ErrorParameter,
  RequestParameter,
} from '../../libs/constants';
import { createErrorResponse } from '../../libs/utilities';
import config from '../../config/configuration';

class SlotsService {
  private slotsRepository: SlotsRepository;

  public constructor() {
    this.slotsRepository = new SlotsRepository();
  }
  public async list(limit?: number, skip?: number) {
    return this.slotsRepository.list({ limit, skip });
  }

  public async addSlots() {
    const { startHour, endHour, duration, timezone } = config;
    const format = 'hh:mm';
    const slotsArray = [];
    let utcStartTime = new Date(moment.tz(startHour, format, timezone).utc().format());
    slotsArray.push(utcStartTime);
    console.log('222222222222', utcStartTime, new Date(utcStartTime));
    const utcEndTime = new Date(moment.tz(endHour, format, timezone).utc().format());

    console.log('222222222222', utcEndTime);
    while (utcStartTime < utcEndTime) {
      utcStartTime = moment(utcStartTime).add(duration, 'm').toDate();
      slotsArray.push(utcStartTime);
    }
    slotsArray.pop();
    console.log('3333333333333', slotsArray, new Date('2021-06-19'));
    return;
  }
  // public async get(query: any) {
  //   const { originalId } = query;
  //   let error = [];
  //   const result = await this.slotsRepository.get(query);
  //   if (!result) {
  //     error = createErrorResponse(
  //       RequestParameter.QUERY,
  //       ErrorParameter.NO_USER,
  //       ErrorParameter.ID,
  //       originalId,
  //     );
  //     throw {
  //       data: error,
  //       message: ERR_MSG.USER_DOES_NOT_EXIST,
  //       type: 'BadRequestError',
  //     };
  //   }
  //   return result;
  // }

  // public async getByQuery(query: any) {
  //   let error = [];
  //   const result = await this.slotsRepository.get(query);
  //   if (!result) {
  //     error = createErrorResponse(
  //       RequestParameter.QUERY,
  //       ErrorParameter.NO_USER,
  //       '',
  //       '',
  //     );
  //     throw {
  //       data: error,
  //       message: ERR_MSG.USER_DOES_NOT_EXIST,
  //       type: 'BadRequestError',
  //     };
  //   }
  //   return result;
  // }

  public async create(query: any) {
    return await this.slotsRepository.create(query);
  }

  // public async login(query: any) {
  //   let error = [];
  //   const user = await this.getByQuery(query);

  //   if (!user) {
  //     error = createErrorResponse(
  //       RequestParameter.BODY,
  //       ErrorParameter.SOMETHING_WENT_BAD,
  //       '',
  //       '',
  //     );
  //     throw {
  //       data: error,
  //       message: ERR_MSG.DATA_NOT_FOUND,
  //       type: 'BadRequestError',
  //     };
  //   }

  //   return user;
  // }

  // public async update(query: any) {
  //   let error = [];
  //   await this.get({ originalId: query.id });
  //   const result = await this.slotsRepository.update(query);

  //   if (!result) {
  //     error = createErrorResponse(
  //       RequestParameter.BODY,
  //       ErrorParameter.SOMETHING_WENT_BAD,
  //       '',
  //       '',
  //     );
  //     throw {
  //       data: error,
  //       message: ERR_MSG.UNABLE_TO_UPDATE,
  //       type: 'BadRequestError',
  //     };
  //   }

  //   return result;
  // }

  // public async delete(query: any) {
  //   const { id } = query;
  //   let error = [];
  //   await this.get({ originalId: id });
  //   const result = await this.slotsRepository.delete({ id });
  //   if (!result) {
  //     error = createErrorResponse(
  //       RequestParameter.BODY,
  //       ErrorParameter.SOMETHING_WENT_BAD,
  //       '',
  //       '',
  //     );
  //     throw {
  //       data: error,
  //       message: ERR_MSG.UNABLE_TO_DELETE,
  //       type: 'BadRequestError',
  //     };
  //   }
  //   return result;
  // }
}

export default SlotsService;
