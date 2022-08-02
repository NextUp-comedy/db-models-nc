declare const settings: {
    name: string;
    value: string;
    updated_at: Date;
    created_at: Date;
}[];
declare const roles: {
    name: string;
    updated_at: Date;
    created_at: Date;
}[];
declare const users: ({
    name: string;
    email: string;
    password: string;
    user_role_id: number;
    acc_paid_revenue: number;
    free_to_be_paid_revenue: number;
    created_by: number;
    updated_by: number;
    updated_at: Date;
    created_at: Date;
    username?: undefined;
} | {
    username: string;
    email: string;
    password: string;
    user_role_id: number;
    acc_paid_revenue: number;
    free_to_be_paid_revenue: number;
    created_by: number;
    updated_by: number;
    updated_at: Date;
    created_at: Date;
    name?: undefined;
})[];
export { settings, roles, users, };
