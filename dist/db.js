"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./enitities/user");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "eriusaki1",
    database: "typeorm",
    synchronize: true,
    logging: true,
    entities: [user_1.User],
    subscribers: []
});
