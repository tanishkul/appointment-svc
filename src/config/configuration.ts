import { config } from 'dotenv';
config();
import * as constants from '../libs/constants';
import { IConfig } from './IConfig';

const envVars: NodeJS.ProcessEnv = process.env;
/* tslint:disable:no-var-requires */
const version = require('../../package.json').version;
const isMongooseDebug =
  envVars.NODE_ENV === constants.EnvVars.DEV;
const configurations = Object.freeze({
  apiPrefix: constants.API_PREFIX,
  duration: envVars.DURATION,
  endHour: envVars.END_HOUR,
  env: envVars.NODE_ENV || 'dev',
  mongo: envVars.MONGO_URL,
  mongooseDebug: isMongooseDebug,
  port: envVars.PORT,
  startHour: envVars.START_HOUR,
  swaggerDefinition: {
    basePath: constants.API_PREFIX,
    info: {
      ...constants.ABOUT,
      version,
    },
    securityDefinitions: {
      Bearer: {
        in: constants.ABOUT.in,
        name: constants.ABOUT.name,
        type: constants.ABOUT.type,
      },
    },
  },
  swaggerUrl: constants.SWAGGER_URL,
  timezone: envVars.TIMEZONE,
}) as IConfig;

export default configurations;
