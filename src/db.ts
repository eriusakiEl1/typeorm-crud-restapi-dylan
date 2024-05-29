import { DataSource } from "typeorm";
import {User} from './enitities/user'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "eriusaki1",
    database: "typeorm",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: []
})