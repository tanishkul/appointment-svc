import * as mongoose from 'mongoose';

import { Nullable } from '../../../libs/Nullable';
import VersioningRepository from '../../versionable/VersioningRepository';
import {
  IQueryCreate,
  IQueryDelete,
  IQueryGet,
  IQueryList,
  IQueryUpdate,
} from './entities';
import IEventModel from './IModel';
import { eventModel } from './model';

export default class EventRepository extends VersioningRepository<
  IEventModel,
  mongoose.Model<IEventModel>
> {
  constructor() {
    super(eventModel);
  }
  /**
   * Get event list.
   * @property {number} skip - Number of records to be skipped.
   * @property {number} limit - Limit number of records to be returned.
   * @returns {Event[]}
   */
  public async list(
    options: IQueryList,
    query: any = {},
  ): Promise<IEventModel[]> {
    options.sort = 'name';
    console.log('Event - List query: ', options);
    return super.getAll(query, options);
  }

  /**
   * Get event.
   * @property {string} id - _id of the record
   * @returns {Event}
   */
  // public async get(query: IQueryGet): Promise<Nullable<IEventModel>> {
  //   console.log('EventRepository - Get: ', query);
  //   return super.getByQuery(query);
  // }

  public async getQuery(options: IQueryList): Promise<IEventModel[]> {
    console.log('Event - Get query: ', options);
    return super.getAll(options, {});
  }

  /**
   * Create new event
   * @property {string} name - The name of record.
   * @returns {Event}
   */
  public async create(options: IQueryCreate): Promise<IEventModel> {
    console.log('EventRepository - Create: ');
    return super.create(options);
  }

  // public async update(options: IQueryUpdate): Promise<IEventModel> {
  //   console.log('EventRepository - update', options);
  //   const id = options.id;
  //   delete options.id;
  //   return super.update({ ...options, originalId: id });
  // }

  /**
   * Delete event
   * @property {string} body.name - The name of record.
   * @returns {Event}
   */
  // public async delete(query: IQueryDelete): Promise<IEventModel> {
  //   console.log('EventRepository - Delete: ');
  //   return super.remove(query.id);
  // }
}
