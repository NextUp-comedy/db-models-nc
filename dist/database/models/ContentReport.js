"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../connections"));
const ContentReport = connections_1.default.define('content_reports', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    contentId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    reportId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    watchedSeconds: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
    },
    revenue: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
    },
    createdBy: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    updatedBy: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    tvodTicketsCount: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    tvodSeconds: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    indexes: [{
            unique: true,
            fields: ['report_id', 'content_id'],
        }],
    paranoid: true,
});
exports.default = ContentReport;
//# sourceMappingURL=ContentReport.js.map