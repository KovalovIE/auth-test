import { passwordRegex, usernameRegex } from '../utils/validation';

export const checkIsUsernameValid = (username: string): boolean => {
    return usernameRegex.test(username.trim());
};

export const checkIsPasswordValid = (password: string): boolean => {
    return passwordRegex.test(password.trim());
};
