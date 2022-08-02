"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../connections"));
const Report = connections_1.default.define('reports', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    watchTimeFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        unique: true,
    },
    watchTimeTo: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    overallWatchedSeconds: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
    },
    totalRevenue: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
    },
    nextUpToOwedSplitPercentage: {
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
exports.default = Report;
//# sourceMappingURL=Report.js.map