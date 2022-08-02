"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../connections"));
const User = connections_1.default.define('users', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    userRoleId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    googleId: {
        type: sequelize_1.DataTypes.STRING,
    },
    accPaidRevenue: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
    },
    freeToBePaidRevenue: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
    },
    createdBy: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    updatedBy: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    paranoid: true,
});
exports.default = User;
//# sourceMappingURL=User.js.map