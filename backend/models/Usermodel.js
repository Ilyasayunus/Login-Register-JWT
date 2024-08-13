import { Sequelize } from "sequelize";
import db from "../config/Databases.js";

const { DataTypes } = Sequelize;

const Users = db.define('Users', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
});

export default Users;