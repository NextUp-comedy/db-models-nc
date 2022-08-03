const settings = [
  {
    name: 'nextup_variables',
    value: {
      NEXTUP_TO_OWED_SPLIT_PERCENTAGE: '0.5',
    },
    updated_at: new Date(),
    created_at: new Date(),
  },
];

const roles = [
  {
    name: 'system',
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'admin',
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'user',
    updated_at: new Date(),
    created_at: new Date(),
  },
];

const users = [
  {
    name: 'System',
    email: 'system@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 1,
    acc_paid_revenue: 0,
    free_to_be_paid_revenue: 0,
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'admin',
    email: 'admin@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 2,
    acc_paid_revenue: 0,
    free_to_be_paid_revenue: 0,
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'zaher',
    email: 'zaherabuamro@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 3,
    acc_paid_revenue: 0,
    free_to_be_paid_revenue: 0,
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'ibrahim',
    email: 'ibrahim.jarada@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 3,
    acc_paid_revenue: 0,
    free_to_be_paid_revenue: 0,
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'ayman',
    email: 'ayman@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 3,
    acc_paid_revenue: 0,
    free_to_be_paid_revenue: 0,
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
];

export {
  settings,
  roles,
  users,
};
