import * as mongoose from 'mongoose';

import IDoctorModel from './IModel';
import DoctorSchema from './schema';

export const doctorSchema = new DoctorSchema(
  {
    _id: String,
  },
  {
    collection: 'doctor',
    versionKey: false,
  },
);

export const doctorModel: mongoose.Model<IDoctorModel> = mongoose.model<IDoctorModel>(
  'doctor',
  doctorSchema,
  'doctor',
  true,
);
