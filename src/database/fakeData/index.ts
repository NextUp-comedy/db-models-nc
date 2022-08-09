const settings = [
  {
    name: 'nextup_variables',
    value: JSON.stringify({
      NEXTUP_TO_OWED_SPLIT_PERCENTAGE: '0.5',
    }),
    updated_at: new Date(),
    created_at: new Date(),
  },
];

const userRoles = [
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

const userStatus = [
  {
    name: 'PENDING',
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'APPROVED',
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'REJECTED',
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'BANNED',
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
    user_status_id: 2,
    acc_paid_revenue: 0,
    free_to_be_paid_revenue: 0,
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 2,
    user_status_id: 2,
    acc_paid_revenue: 0,
    free_to_be_paid_revenue: 0,
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Zaher',
    email: 'zaherabuamro@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 3,
    user_status_id: 2,
    acc_paid_revenue: 0,
    free_to_be_paid_revenue: 0,
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Ibrahim',
    email: 'ibrahim.jarada@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 3,
    user_status_id: 3,
    acc_paid_revenue: 0,
    free_to_be_paid_revenue: 0,
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Ayman',
    email: 'ayman@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 3,
    user_status_id: 4,
    acc_paid_revenue: 0,
    free_to_be_paid_revenue: 0,
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Rand',
    email: 'rand@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 3,
    user_status_id: 1,
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
  userRoles,
  userStatus,
  users,
};
