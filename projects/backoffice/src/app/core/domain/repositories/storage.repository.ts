export interface StorageRepository {
  setStorage(nameProperty: string, value: string): void;
  getStorage(nameProperty: string): string | null;
  clear(): void;
  getFieldInToken(fieldName: string): string | string[];
}
