import { Schema, SchemaDefinition, SchemaOptions } from 'mongoose';

import VersionableSchema from '../../versionable/VersionableSchema';

export default class EventSchema extends VersionableSchema {
  constructor(options: any, collections: any) {
    const baseSchema = {
      ...options,
      doctorId: {
        required: true,
        type: String,
      },
      events: {
        required: false,
        type: Schema.Types.Mixed,
      },
      id: {
        required: true,
        type: String,
      },
      userId: {
        required: true,
        type: String,
      },
    };
    super(baseSchema, collections);
  }
}
