export type StorageValue = string | number | boolean | Record<string, unknown> | Array<unknown> | null;

export interface StorageMethods {
    setItem: (key: string, value: StorageValue) => Promise<void>;
    getItem: <T extends StorageValue>(key: string) => Promise<T | null>;
    removeItem: (key: string) => Promise<void>;
}
