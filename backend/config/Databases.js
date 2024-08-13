import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db', 'root', 'yunus765', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
