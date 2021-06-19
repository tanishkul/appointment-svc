import { Schema, SchemaDefinition, SchemaOptions } from 'mongoose';

import VersionableSchema from '../../versionable/VersionableSchema';

export default class EventSchema extends VersionableSchema {
  constructor(options: any, collections: any) {
    const baseSchema = {
      ...options,
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
      endTime: {
        required: true,
        type: Date,
      },
      id: {
        required: false,
        type: String,
      },
      startTime: {
        required: false,
        type: Date,
      }
    };
    super(baseSchema, collections);
  }
}
