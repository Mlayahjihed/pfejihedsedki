const mongoose =require('mongoose');


//msg schema or document structure
const forfait = new mongoose.Schema({
    nompack: {
        type: String,
        unique: true,
      },
      prix:{
          type : String,
      },
      nbrsms:{
          type : String,
      },
     
      validite:{
        type : String
    },
     

})




const forfaits = new mongoose.model("forfaits",forfait);
module.exports = forfaits;