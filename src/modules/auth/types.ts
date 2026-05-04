export type LoginParams = {
    username: string;
    password: string;
};

export type AuthField = 'username' | 'password';
export type ValidationErrors = Partial<Record<AuthField, string>>;
