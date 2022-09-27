import { sequelize } from '../..';
import umzug from '../../index';

(async (): Promise<void> => {
  await umzug.up();
  sequelize.close();
})();
