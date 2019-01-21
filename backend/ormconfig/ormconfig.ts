import { config } from '../src/config'

export const connectionOptions: any = {
  type: config.dbType,
  database: config.dbName,
  host: config.dbHost,
  port: config.dbPort,
  username: config.dbUsername,
  password: config.dbPassword,
  synchronize: config.dbSync,
  logging: config.dbLogging,
  entities: ['src/data/**/*.ts'],
  migrations: ['src/data/migrations/**/*.ts'],
  subscribers: ['src/data/subscribers/**/*.ts'],
  cli: {
    entitiesDir: 'src/data/',
    migrationsDir: 'src/data/migrations',
    subscribersDir: 'src/data/subscribers',
  },
}
