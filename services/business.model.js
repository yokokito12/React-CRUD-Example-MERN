const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Profile = new Schema({
    
  person_name: {
    type: String
  },
  person_Duty: {
    type: String
  },
  person_Resumo: {
    type: String
  },
  person_Experience: {
    type: String
  },
   img: { 
     data: Buffer, contentType: String 
  }
},{
    collection: 'profile'
});

module.exports = mongoose.model('Profile', Profile);

