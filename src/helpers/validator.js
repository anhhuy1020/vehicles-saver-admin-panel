const { isEmpty } = require('underscore');

validator = require('validator');

function validateEmail(email){
  if(!email){
    return "Email is require";
  }
  if(!validator.isEmail(email)){
    return "Email is invalid!";
  }
  return null;
}

function validateName(name){
  if(!name){
    return "Name is require";
  }
  return null;
}

function validatePassword(password){
  if(!password){
    return "Password is require";
  }
  if(!validator.matches(password, /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)){
    return "Password is invalid!";
  }
  return null;
}

function validatePhone(phone){
  if(!phone){
    return "Phone is require";
  }
  if(!validator.isMobilePhone(phone)){
    return "Phone is invalid!";
  }
  return null;
}



function validateAddress(address){
  return null;
}


module.exports = {
    validateEmail,
    validateName,
    validateAddress,
    validatePassword,
    validatePhone
}