import * as mongoose from 'mongoose';

import VersioningRepository from '../../versionable/VersioningRepository';
import IEventModel from './IModel';
import { eventModel } from './model';

export default class EventRepository extends VersioningRepository<
  IEventModel,
  mongoose.Model<IEventModel>
> {
  constructor() {
    super(eventModel);
  }

  public async getQuery(options: any): Promise<IEventModel[]> {
    console.log('Event - Get query: ', options);
    return super.getAll(options, {});
  }

  public async create(options: any): Promise<IEventModel> {
    console.log('EventRepository - Create: ');
    return super.create(options);
  }
}
