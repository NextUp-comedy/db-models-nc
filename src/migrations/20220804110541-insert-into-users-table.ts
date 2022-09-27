import { users } from 'db-models-nc';
import { Migration } from '../migration';

const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.removeConstraint('users','users_created_by_fkey')
  await queryInterface.removeConstraint('users','users_updated_by_fkey')
  await queryInterface.bulkInsert('users', users);
  await queryInterface.addConstraint('users', {
  fields: ['created_by'],
  type: 'foreign key',
  name: 'users_created_by_fkey',
  references: { //Required field
    table: 'users',
    field: 'id'
  },
  onDelete: 'cascade',
  onUpdate: 'cascade'
});
  await queryInterface.addConstraint('users', {
  fields: ['updated_by'],
  type: 'foreign key',
  name: 'users_updated_by_fkey',
  references: { //Required field
    table: 'users',
    field: 'id'
  },
  onDelete: 'cascade',
  onUpdate: 'cascade'
});
};

const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.bulkDelete('users', { name: users.map((user) => user.name) });
};

export { up, down };
