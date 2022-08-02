import { DataTypes } from 'sequelize';
import { IContentReport } from '../../interfaces';
import sequelize from '../connections';

const ContentReport = sequelize.define<IContentReport>(
  'content_reports',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    contentId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    watchedSeconds: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    revenue: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.INTEGER,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
    },
    tvodTicketsCount: {
      type: DataTypes.INTEGER,
    },
    tvodSeconds: {
      type: DataTypes.INTEGER,
    },
  },
  {
    indexes: [{
      unique: true,
      fields: ['report_id', 'content_id'],
    }],
    paranoid: true,
  },
);

export default ContentReport;
