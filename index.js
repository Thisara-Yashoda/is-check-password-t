const obj = {
    output: '',
    status: false,
    isLength: false,
    isLowerCase: false,
    isUpperCase: false,
    isAtLeastOne: false
};
const check1 = (password) => {


    //let output = ' '

    if (password.length < 8) {

        obj.output = 'Error: Password must be at least 8 characters'
        obj.isLength = true

    } else if (password.search(/[a-z]/) < 0) {

        obj.output = "Error: Password must contain at least one lowercase letter";
        obj.isLowerCase = true


    } else if (password.search(/[A-Z]/) < 0) {

        obj.output = "Error: Password must contain at least one uppercase letter";
        obj.isUpperCase = true

    } else if (password.search(/[0-9]/) < 0) {

        obj.output = "Error: Password must contain at least one number"
        obj.isAtLeastOne = true

    } else {
        obj.output = "Success!"
        obj.status = true
    }

    return obj
}

const check = (password) => {

    //let output = ' '

    if (password.length < 8) {

        obj.output = 'Error: Password must be at least 8 characters'
        obj.isLength = true

    } else if (password.search(/[a-z]/) < 0) {

        obj.output = "Error: Password must contain at least one lowercase letter";
        obj.isLowerCase = true


    } else if (password.search(/[A-Z]/) < 0) {

        obj.output = "Error: Password must contain at least one uppercase letter";
        obj.isUpperCase = true

    } else if (password.search(/[0-9]/) < 0) {

        obj.output = "Error: Password must contain at least one number"
        obj.isAtLeastOne = true

    } else {
        obj.output = "Success!"
        obj.status = true
    }

    return obj
}
module.exports = {
    check,
    check1
}
