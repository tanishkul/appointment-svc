import { ISwaggerDefinition } from '../libs/Swagger';

export interface IConfig extends ISwaggerDefinition {
  env: string;
  mongo: string;
  mongooseDebug: boolean;
  port: string;
  startHour: string;
  endHour: string;
  duration: string;
  timezone: string;
  swaggerUrl: string;
}
