import * as mongoose from 'mongoose';

import IEventModel from './IModel';
import EventSchema from './schema';

export const eventSchema = new EventSchema(
  {
    _id: String,
  },
  {
    collection: 'event',
    versionKey: false,
  },
);

export const eventModel: mongoose.Model<IEventModel> = mongoose.model<IEventModel>(
  'event',
  eventSchema,
  'event',
  true,
);
