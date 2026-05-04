export const API_BASE_URL = 'https://dummyjson.com';

export const API_ENDPOINTS = {
    auth: {
        login: `${API_BASE_URL}/auth/login`,
        me: `${API_BASE_URL}/auth/me`,
        refresh: `${API_BASE_URL}/auth/refresh`,
    },
} as const;
