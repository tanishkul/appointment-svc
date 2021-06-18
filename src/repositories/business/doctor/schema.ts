import VersionableSchema from '../../versionable/VersionableSchema';

export default class DoctorSchema extends VersionableSchema {
  constructor(options: any, collections: any) {
    const baseSchema = {
      ...options,
      id: {
        required: false,
        type: String,
      },
      name: {
        required: true,
        type: String,
      },
    };
    super(baseSchema, collections);
  }
}
