import * as mongoose from 'mongoose';

export interface IDatabaseConfig {
  mongoUri: string;
}

export default class Database {
  public static open({ mongoUri }: IDatabaseConfig) {
    return new Promise((resolve, reject) => {
      // Mongoose options
      const options = {
        autoIndex: false, // Don't build indexes
        bufferMaxEntries: 0,
        keepAlive: 1,
        poolSize: 10, // Maintain up to 10 socket connections
        reconnectInterval: 500, // Reconnect every 500ms
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        useFindAndModify: false,
        useNewUrlParser: true,
      };

      // Mock the mongoose for testing purpose using Mockgoose
      // connect to mongo db
      mongoose.connect(mongoUri, options, async (err) => {
        if (err) {
          return reject(err);
        }
        seed();
        resolve();
      });

      mongoose.connection.on('error', () => {
        throw new Error(`unable to connect to database: ${mongoUri}`);
      });
    });
  }

  public static close() {
    mongoose.disconnect();
  }
}
