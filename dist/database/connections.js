"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
const connectionString = config_1.default.url;
const sequelize = new sequelize_1.Sequelize(connectionString, {
    define: { underscored: true },
    logging: false,
    dialect: 'postgres',
    dialectOptions: { ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false },
});
exports.default = sequelize;
//# sourceMappingURL=connections.js.map