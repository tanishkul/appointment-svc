import {
  ERR_MSG,
  ErrorParameter,
  RequestParameter,
} from '../../libs/constants';
import { createErrorResponse } from '../../libs/utilities';
import EventRepository from '../../repositories/business/event/repository';

class EventService {
  private eventRepository: EventRepository;

  public constructor() {
    this.eventRepository = new EventRepository();
  }
  public async list(limit?: number, skip?: number) {
    return this.eventRepository.list({ limit, skip });
  }

  // public async get(query: any) {
  //   const { originalId } = query;
  //   let error = [];
  //   const result = await this.eventRepository.get(query);
  //   if (!result) {
  //     error = createErrorResponse(
  //       RequestParameter.QUERY,
  //       ErrorParameter.NO_CART,
  //       ErrorParameter.ID,
  //       originalId,
  //     );
  //     throw {
  //       data: error,
  //       message: ERR_MSG.CART_DOES_NOT_EXIST,
  //       type: 'BadRequestError',
  //     };
  //   }
  //   return result;
  // }

  public async create(query: any) {
    return await this.eventRepository.create(query);
  }

  // public async update(query: any) {
  //   let error = [];
  //   await this.get({ originalId: query.id });
  //   const result = await this.eventRepository.update(query);

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

  // public async emptyCart(query: any) {
  //   let error = [];
  //   await this.get({ originalId: query.id });
  //   const result = await this.eventRepository.update({ ...query, event: [] });

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
  //   const result = await this.eventRepository.delete({ id });
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

export default EventService;
