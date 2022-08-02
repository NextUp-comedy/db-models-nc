"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../connections"));
const Watches = connections_1.default.define('watches', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    streamId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
    },
    contentId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    contentReportId: {
        type: sequelize_1.DataTypes.INTEGER,
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
exports.default = Watches;
//# sourceMappingURL=Watches.js.map