import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.INTEGER
    }
})