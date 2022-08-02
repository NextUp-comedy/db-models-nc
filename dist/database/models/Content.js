"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../connections"));
const Content = connections_1.default.define('contents', {
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    runtime: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    publishDate: {
        type: sequelize_1.DataTypes.DATE,
    },
    permalink: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    advance: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    launchDate: {
        type: sequelize_1.DataTypes.DATE,
    },
    nextUpAccRevenue: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    owedAccRevenue: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    freeToBePaid: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    feePaid: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    filmingCosts: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    paidToOwedAmount: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    createdBy: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    updatedBy: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    primaryCategory: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    paranoid: true,
});
exports.default = Content;
//# sourceMappingURL=Content.js.map