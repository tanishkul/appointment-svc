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
import IDoctorModel from './IModel';
import { doctorModel } from './model';

export default class DoctorRepository extends VersioningRepository<
  IDoctorModel,
  mongoose.Model<IDoctorModel>
> {
  constructor() {
    super(doctorModel);
  }

  public async count(): Promise<number> {
    return super.countDocuments();
  }

  /**
   * Get doctor list.
   * @property {number} skip - Number of records to be skipped.
   * @property {number} limit - Limit number of records to be returned.
   * @returns {Doctor[]}
   */
  public async list(
    options: IQueryList,
    query: any = {},
  ): Promise<IDoctorModel[]> {
    options.sort = 'name';
    console.log('Doctor - List query: ', options);
    return super.getAll(query, options);
  }

  /**
   * Get doctor.
   * @property {string} id - _id of the record
   * @returns {Doctor}
   */
  // public async get(query: IQueryGet): Promise<Nullable<IDoctorModel>> {
  //   console.log('DoctorRepository - Get: ', query);
  //   return super.getByQuery(query);
  // }

  public async getQuery(options: IQueryList): Promise<IDoctorModel[]> {
    console.log('Doctor - Get query: ', options);
    return super.getAll(options, {});
  }

  /**
   * Create new doctor
   * @property {string} name - The name of record.
   * @returns {Doctor}
   */
  public async create(options: IQueryCreate): Promise<IDoctorModel> {
    console.log('DoctorRepository - Create: ');
    return super.create(options);
  }

  // public async update(options: IQueryUpdate): Promise<IDoctorModel> {
  //   console.log('DoctorRepository - update', options);
  //   const id = options.id;
  //   delete options.id;
  //   return super.update({ ...options, originalId: id });
  // }

  /**
   * Delete doctor
   * @property {string} body.name - The name of record.
   * @returns {Doctor}
   */
  // public async delete(query: IQueryDelete): Promise<IDoctorModel> {
  //   console.log('DoctorRepository - Delete: ');
  //   return super.remove(query.id);
  // }
}
