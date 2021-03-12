var mongoose = require('mongoose');
 var schema = mongoose.Schema

  const credexSchema = new schema({
    title:  String,
    author: String,
    }
  );
  const registerinfo=mongoose.model('register',credexSchema)
  module.exports=registerinfo;