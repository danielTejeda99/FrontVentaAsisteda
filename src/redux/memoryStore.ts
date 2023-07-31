interface MemoryStorage {
    store: { [key: string]: string };
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
  }
  
  const memoryStorage: MemoryStorage = {
    store: {},
    getItem(key: string) {
      return this.store[key] || null;
    },
    setItem(key: string, value: string) {
      this.store[key] = value;
    },
    removeItem(key: string) {
      delete this.store[key];
    },
  };
  
  export default memoryStorage;
  