import VersionableSchema from '../../versionable/VersionableSchema';

export default class UserSchema extends VersionableSchema {
  constructor(options: any, collections: any) {
    const baseSchema = {
      ...options,
      id: {
        required: true,
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
