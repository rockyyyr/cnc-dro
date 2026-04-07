export const wait = millis => new Promise(resolve => setTimeout(resolve, millis));

export const hasValue = value => ![undefined, null].includes(value);

export const setIfExists = (value, defaultValue) => {
    return hasValue(value)
        ? value
        : defaultValue;
}; 