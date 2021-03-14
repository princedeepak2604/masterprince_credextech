const mongoose=require("mongoose");

//connection creation and creation a new DB..

mongoose.connect("mongodb://localhost:27017/credexdb",{ useNewUrlParser: true , useUnifiedTopology: true ,useFindAndModify:false})
.then( () => console.log("conection successfull...."))
.catch((err) => console.log(err));