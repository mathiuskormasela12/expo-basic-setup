import { MMKV } from "react-native-mmkv";
import { Storage } from "redux-persist";

const mmkv = new MMKV();

const storage: Storage = {
  getItem(key: string) {
    const value = mmkv.getString(key);
    return Promise.resolve(value);
  },
  setItem(key: string, value: any) {
    mmkv.set(key, value);
    return Promise.resolve(true);
  },
  removeItem(key: string) {
    mmkv.delete(key);
    return Promise.resolve();
  },
};

export default storage;
