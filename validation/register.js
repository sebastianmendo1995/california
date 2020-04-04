const Validator = require('validator');
const validText = require('./validText');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.email = validText(data.email) ? data.email : "";
    data.password = validText(data.password) ? data.password : "";
    data.password2 = validText(data.password2) ? data.password2 : "";
    data.nationality = validText(data.nationality) ? data.nationality : "";
    data.phone = validText(data.phone) ? data.phone : "";

    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 18 })) {
        errors.password = "Password must be between 6 and 18 chars";
    }

    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = "Passwords must match";
    }

    if (Validator.isEmpty(data.nationality)) {
        errors.nationality = "Nationality is required";
    }

    if (Validator.isEmpty(data.phone)) {
        errors.phone = "Phone is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}