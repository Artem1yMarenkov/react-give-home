import {isLength, isEmail} from 'validator';

const useValidate = onInvalid => elements => {
    const keys = Object.keys(elements);
    const errors = [];

    keys.forEach(key => {
        const value = elements[key];

        switch(key) {
            case "login":
                !isLength(value, {min: 3, max: 100}) && errors.push(key);
                break;
            case "email":
                !isEmail(value) && errors.push(key);
                break;
            case "password":
                !isLength(value, {min: 8, max: 20}) && errors.push(key);
                break;
            default:
                break;
        }
    });

    errors.length > 0 ? onInvalid(errors[0]) : onInvalid(null)
}

export default useValidate;