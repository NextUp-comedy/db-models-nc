const settings = [
  {
    name: 'variables',
    value: JSON.stringify({
      regularVariables: {
        nextupToOwedSplitPercentage: '0.5',
        systemActivationDate: '2022-08-30',
        fetchMaxCount: '10',
        expiredAfterInYears: '2',
        viewliftEmail: 'ibrahim.jarada@gmail.com',
        viewliftEndpoint: 'https://export-api.viewlift.com',
        viewliftWatchesFetchLimit: '1000',
      },
      encryptedVariables: {
        viewliftPassword: 'U2FsdGVkX1/3B+fSkAa/x9w21hKYPlsV1an8kbIxGDA=',
      },
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
    name: 'master_admin',
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'admin',
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'comedian',
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

const payoutStatuses = userStatus.slice(0, 3).concat({
  name: 'CANCELLED',
  updated_at: new Date(),
  created_at: new Date(),
});

const users = [
  {
    name: 'System',
    email: 'system@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 1,
    user_status_id: 2,
    total_revenue: 0,
    paid_revenue: 0,
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Master Admin',
    email: 'masteradmin@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 2,
    user_status_id: 2,
    total_revenue: 0,
    paid_revenue: 0,
    image: 'https://nextup-comedy-bucket-gfs.s3.eu-west-2.amazonaws.com/2/1660034083405.jpeg',
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 3,
    user_status_id: 2,
    total_revenue: 0,
    paid_revenue: 0,
    image: 'https://nextup-comedy-bucket-gfs.s3.eu-west-2.amazonaws.com/2/1660034083405.jpeg',
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Zaher',
    email: 'zaherabuamro@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 4,
    user_status_id: 2,
    total_revenue: 0,
    paid_revenue: 0,
    image: 'https://nextup-comedy-bucket-gfs.s3.eu-west-2.amazonaws.com/2/1660034083405.jpeg',
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Ibrahim',
    email: 'ibrahim.jarada@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 4,
    user_status_id: 3,
    rejection_reason: 'Hateful or abusive content',
    total_revenue: 0,
    paid_revenue: 0,
    image: 'https://nextup-comedy-bucket-gfs.s3.eu-west-2.amazonaws.com/2/1660034083405.jpeg',
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Ayman',
    email: 'ayman@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 4,
    user_status_id: 4,
    total_revenue: 0,
    paid_revenue: 0,
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Rand',
    email: 'rand@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 4,
    user_status_id: 1,
    total_revenue: 0,
    paid_revenue: 0,
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Nujood',
    email: 'shawar.nujood@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 4,
    user_status_id: 2,
    total_revenue: 0,
    paid_revenue: 0,
    image: 'https://nextup-comedy-bucket-gfs.s3.eu-west-2.amazonaws.com/2/1660034083405.jpeg',
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Mohammed Hamada',
    email: 'mohammedhamada@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 4,
    user_status_id: 2,
    total_revenue: 0,
    paid_revenue: 0,
    image: 'https://nextup-comedy-bucket-gfs.s3.eu-west-2.amazonaws.com/2/1660034083405.jpeg',
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Nada Abozaid',
    email: 'nada.abozaid@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 4,
    user_status_id: 2,
    total_revenue: 0,
    paid_revenue: 0,
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Amjad',
    email: 'amjad@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 4,
    user_status_id: 3,
    rejection_reason: 'Hateful or abusive content',
    total_revenue: 0,
    paid_revenue: 0,
    image: 'https://nextup-comedy-bucket-gfs.s3.eu-west-2.amazonaws.com/2/1660034083405.jpeg',
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Fadi Alwazir',
    email: 'fadi.alwazir@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 4,
    user_status_id: 2,
    total_revenue: 0,
    paid_revenue: 0,
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Farah Shaqoura',
    email: 'farahismail@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 4,
    user_status_id: 4,
    total_revenue: 0,
    paid_revenue: 0,
    image: 'https://nextup-comedy-bucket-gfs.s3.eu-west-2.amazonaws.com/2/1660034083405.jpeg',
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Osama Elzero',
    email: 'osama.elzero@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 4,
    user_status_id: 2,
    total_revenue: 0,
    paid_revenue: 0,
    image: 'https://nextup-comedy-bucket-gfs.s3.eu-west-2.amazonaws.com/2/1660034083405.jpeg',
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Ahmed Alsaqqa',
    email: 'ahmed.alsaqqa@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 4,
    user_status_id: 3,
    rejection_reason: 'Hateful or abusive content',
    total_revenue: 0,
    paid_revenue: 0,
    image: 'https://nextup-comedy-bucket-gfs.s3.eu-west-2.amazonaws.com/2/1660034083405.jpeg',
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Amr Diab',
    email: 'amr.diab@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 4,
    user_status_id: 2,
    total_revenue: 0,
    paid_revenue: 0,
    image: 'https://nextup-comedy-bucket-gfs.s3.eu-west-2.amazonaws.com/2/1660034083405.jpeg',
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Mohammed Abdelhadi',
    email: 'mohammed.abdelhadi@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 4,
    user_status_id: 4,
    total_revenue: 0,
    paid_revenue: 0,
    image: 'https://nextup-comedy-bucket-gfs.s3.eu-west-2.amazonaws.com/2/1660034083405.jpeg',
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Abdalla Abuamro',
    email: 'abdalla.abuamro@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 4,
    user_status_id: 1,
    total_revenue: 0,
    paid_revenue: 0,
    image: 'https://nextup-comedy-bucket-gfs.s3.eu-west-2.amazonaws.com/2/1660034083405.jpeg',
    created_by: 1,
    updated_by: 1,
    updated_at: new Date(),
    created_at: new Date(),
  },
  {
    name: 'Lina Ebeid',
    email: 'lina.ebied@gmail.com',
    password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
    user_role_id: 4,
    user_status_id: 1,
    total_revenue: 0,
    paid_revenue: 0,
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
  payoutStatuses,
};
