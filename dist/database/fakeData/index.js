"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.roles = exports.settings = void 0;
const settings = [
    {
        name: 'APP_MAIL',
        value: 'hello.world@gmail.com',
        updated_at: new Date(),
        created_at: new Date(),
    },
    {
        name: 'MAIL_PASSWORD',
        value: 'hello world',
        updated_at: new Date(),
        created_at: new Date(),
    },
    {
        name: 'VIEWLLIFT_EMAIL',
        value: 'hello.world@gmail.com',
        updated_at: new Date(),
        created_at: new Date(),
    },
    {
        name: 'VIEWLLIFT_PASSWORD',
        value: 'hello world',
        updated_at: new Date(),
        created_at: new Date(),
    },
    {
        name: 'VIEWLIFT_ENDPOINT',
        value: 'https://hello.world.com',
        updated_at: new Date(),
        created_at: new Date(),
    },
    {
        name: 'VIEWLIFT_WATCHES_FETCH_LIMIT',
        value: '2314',
        updated_at: new Date(),
        created_at: new Date(),
    },
    {
        name: 'NEXTUP_TO_OWED_SPLIT_PERCENTAGE',
        value: '0.5',
        updated_at: new Date(),
        created_at: new Date(),
    },
];
exports.settings = settings;
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
    {
        name: 'user',
        updated_at: new Date(),
        created_at: new Date(),
    },
    {
        name: 'user',
        updated_at: new Date(),
        created_at: new Date(),
    },
];
exports.roles = roles;
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
        username: 'zaher',
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
        username: 'ibrahim',
        email: 'ibrahim.jarada@gmail.com',
        password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
        user_role_id: 4,
        acc_paid_revenue: 0,
        free_to_be_paid_revenue: 0,
        created_by: 1,
        updated_by: 1,
        updated_at: new Date(),
        created_at: new Date(),
    },
    {
        username: 'ayman',
        email: 'ayman@gmail.com',
        password: '$2b$10$O2cKyz8IAgx0jI2OO89j0uZWX9avosPQQ3xWZzcQn7fP/Y3OeFfXG',
        user_role_id: 5,
        acc_paid_revenue: 0,
        free_to_be_paid_revenue: 0,
        created_by: 1,
        updated_by: 1,
        updated_at: new Date(),
        created_at: new Date(),
    },
];
exports.users = users;
//# sourceMappingURL=index.js.map