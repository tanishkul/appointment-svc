import * as mongoose from 'mongoose';

import IEventModel from './IModel';
import EventSchema from './schema';

export const eventSchema = new EventSchema(
  {
    _id: String,
  },
  {
    collection: 'events',
    versionKey: false,
  },
);

export const eventModel: mongoose.Model<IEventModel> = mongoose.model<IEventModel>(
  'events',
  eventSchema,
  'events',
  true,
);
