import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    database: "real_time",
    username: "root",
    password: "root",
    logging: (msg) => console.log(msg)
});