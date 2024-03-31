import {MMKV} from "react-native-mmkv";

export const storage = new MMKV();

const initStorage = function() {
    const cities = storage.getString('cities');
    if (!cities) {
        storage.set('cities', JSON.stringify([]));
    }
}

export default initStorage;