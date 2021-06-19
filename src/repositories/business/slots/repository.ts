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
import ISlotsModel from './IModel';
import { slotsModel } from './model';

export default class SlotsRepository extends VersioningRepository<
  ISlotsModel,
  mongoose.Model<ISlotsModel>
> {
  constructor() {
    super(slotsModel);
  }

  public async count(): Promise<number> {
    return super.countDocuments();
  }
  /**
   * Get slot list.
   * @property {number} skip - Number of records to be skipped.
   * @property {number} limit - Limit number of records to be returned.
   * @returns {Slots[]}
   */
  public async list(
    options: IQueryList,
    query: any = {},
  ): Promise<ISlotsModel[]> {
    options.sort = 'name';
    console.log('Slots - List query: ', options);
    return super.getAll(query, options);
  }

  /**
   * Get slot.
   * @property {string} id - _id of the record
   * @returns {Slots}
   */
  // public async get(query: IQueryGet): Promise<Nullable<ISlotsModel>> {
  //   console.log('SlotsRepository - Get: ', query);
  //   return super.getByQuery(query);
  // }

  public async getQuery(options: IQueryList): Promise<ISlotsModel[]> {
    console.log('Slots - Get query: ', options);
    return super.getAll(options, {});
  }

  /**
   * Create new slot
   * @property {string} name - The name of record.
   * @returns {Slots}
   */
  public async create(options: IQueryCreate): Promise<ISlotsModel> {
    console.log('SlotsRepository - Create: ');
    return super.create(options);
  }

  public async createAll(documents: IQueryCreate[]) {
    console.log('DataStreamTypeRepository - createAll');
    return super.insertMany(documents);
  }

  // public async update(options: IQueryUpdate): Promise<ISlotsModel> {
  //   console.log('SlotsRepository - update', options);
  //   const id = options.id;
  //   delete options.id;
  //   return super.update({ ...options, originalId: id });
  // }

  /**
   * Delete slot
   * @property {string} body.name - The name of record.
   * @returns {Slots}
   */
  // public async delete(query: IQueryDelete): Promise<ISlotsModel> {
  //   console.log('SlotsRepository - Delete: ');
  //   return super.remove(query.id);
  // }
}
