const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function Validatecontact(data) {
    let errors = {};
  
   
    data.telephone = !isEmpty(data.telephone) ? data.telephone : "";
    
  
    
    
      if (data.telephone.length!==8) {
        errors.telephone = "Téelephone doit etre 8 chiffre";
      }
      if (validator.isEmpty(data.telephone)) {
        errors.telephone = "Obligatoire";
      } 
     
   
    
  
  
    return {
        errors,
        isValid: isEmpty(errors)
    }
  };