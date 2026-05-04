import * as Keychain from 'react-native-keychain';
import type { StorageMethods, StorageValue } from './types';

class KeychainStorage implements StorageMethods {
    setItem = async (key: string, value: StorageValue): Promise<void> => {
        try {
            if (value === undefined) {
                return;
            }
            const payload = JSON.stringify(value);

            await Keychain.setGenericPassword('auth', payload, {
                service: key,
                accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
            });
        } catch (error) {
            console.error(`KeychainStorage setItem error: ${key}`, error);
        }
    };

    getItem = async <T extends StorageValue>(key: string): Promise<T | null> => {
        try {
            const value = await Keychain.getGenericPassword({
                service: key,
            });

            if (value) {
                return JSON.parse(value.password) as T;
            }
            return null;
        } catch (error) {
            console.error(`KeychainStorage getItem error: ${key}`, error);
            return null;
        }
    };

    removeItem = async (key: string): Promise<void> => {
        try {
            await Keychain.resetGenericPassword({ service: key });
        } catch (error) {
            console.error(`KeychainStorage removeItem error: ${key}`, error);
        }
    };
}

export const storage = new KeychainStorage();
