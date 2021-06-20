import VersionableSchema from '../../versionable/VersionableSchema';

export default class EventSchema extends VersionableSchema {
  constructor(options: any, collections: any) {
    const baseSchema = {
      ...options,
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
      start: {
        type: Number,
      },
      startTime: {
        required: false,
        type: Date,
      },
    };
    super(baseSchema, collections);
  }
}
