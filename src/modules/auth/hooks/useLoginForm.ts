import { useCallback, useState } from 'react';
import { AuthField, LoginParams, ValidationErrors } from '../types';
import { checkIsPasswordValid, checkIsUsernameValid } from '../../../helpers/validateFields';

export const useLoginForm = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

    const validateField = useCallback((field: AuthField, fieldValue: string): string | undefined => {
        const value = fieldValue.trim();
        const fieldLabel = field === 'username' ? 'Username' : 'Password';

        if (!value) {
            return `${fieldLabel} is required`;
        }

        if (field === 'username' && !checkIsUsernameValid(value)) {
            return 'Username is invalid';
        }

        if (field === 'password' && !checkIsPasswordValid(value)) {
            return 'Password is invalid';
        }

        return undefined;
    }, []);

    const clearFieldError = useCallback((field: AuthField) => {
        setValidationErrors((prev) => {
            if (!prev[field]) {
                return prev;
            }

            const next = { ...prev };
            delete next[field];
            return next;
        });
    }, []);

    const setFieldError = useCallback((field: AuthField, error?: string) => {
        setValidationErrors((prev) => {
            const next = { ...prev };

            if (error) {
                next[field] = error;
            } else {
                delete next[field];
            }

            return next;
        });
    }, []);

    const onChangeText = useCallback(
        (inputName: AuthField, text: string) => {
            if (inputName === 'username') {
                setUsername(text);
            } else if (inputName === 'password') {
                setPassword(text);
            }

            clearFieldError(inputName);
        },
        [clearFieldError],
    );

    const onFocusField = useCallback(
        (inputName: AuthField) => {
            clearFieldError(inputName);
        },
        [clearFieldError],
    );

    const onBlurField = useCallback(
        (inputName: AuthField) => {
            const fieldValue = inputName === 'username' ? username : password;
            const validationError = validateField(inputName, fieldValue);

            setFieldError(inputName, validationError);
        },
        [password, setFieldError, username, validateField],
    );

    const validateForm = useCallback((): LoginParams | null => {
        const nextValidationErrors: ValidationErrors = {};
        const usernameError = validateField('username', username);
        const passwordError = validateField('password', password);

        if (usernameError) {
            nextValidationErrors.username = usernameError;
        }

        if (passwordError) {
            nextValidationErrors.password = passwordError;
        }

        if (Object.keys(nextValidationErrors).length) {
            setValidationErrors(nextValidationErrors);
            return null;
        }

        return {
            username: username.trim(),
            password: password.trim(),
        };
    }, [password, username, validateField]);

    const isFormFilled = Boolean(username.trim() && password.trim());

    return {
        username,
        password,
        validationErrors,
        isFormFilled,
        onChangeText,
        onFocusField,
        onBlurField,
        validateForm,
    };
};
