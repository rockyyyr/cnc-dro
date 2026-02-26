export const setStateAndSave = (value, setter, storageName, callback) => {
    setter(value);
    localStorage.setItem(storageName, value);

    if (callback) {
        callback(value);
    }
};

export const save = (value, storageName) => {
    localStorage.setItem(storageName, value);
};

export const get = (storageName, defaultValue) => {
    const savedValue = localStorage.getItem(storageName);
    return savedValue !== null ? savedValue : defaultValue;
};
