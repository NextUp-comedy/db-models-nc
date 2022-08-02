import { DataTypes } from 'sequelize';
import sequelize from '../connections';
import { ISettings } from '../../interfaces';

const Settings = sequelize.define<ISettings>(
  'settings',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    paranoid: true,
  },
);

export default Settings;
