import VersionableSchema from '../../versionable/VersionableSchema';

export default class SlotsSchema extends VersionableSchema {
  constructor(options: any, collections: any) {
    const baseSchema = {
      ...options,
      booked: {
        default: false,
        required: true,
        type: Boolean,
      },
      bookingId: {
        required: true,
        type: String,
      },
      id: {
        required: false,
        type: String,
      },
      time: {
        required: true,
        type: Date,
      },
    };
    super(baseSchema, collections);
  }
}
