import * as mongoose from 'mongoose';

import ISlotsModel from './IModel';
import SlotsSchema from './schema';

export const slotSchema = new SlotsSchema(
  {
    _id: String,
  },
  {
    collection: 'slots',
    versionKey: false,
  },
);

export const slotsModel: mongoose.Model<ISlotsModel> = mongoose.model<ISlotsModel>(
  'slots',
  slotSchema,
  'slots',
  true,
);
