const express = require("express");
require("./db/conn");
const Student =require("./models/Students");
const app = express();
const port=process.env.PORT|| 3000;
app.use(express.json());
//post data using then - catch method
//create a new students
//app.post("/students",(req,res)=>{
//    console.log(req.body);
//    const user = new Student(req.body);

//    user.save().then(()=>{
//        res.status(201).send(user);
//    }).catch((e)=>{
//        res.status(400).send(e);
//    })
//})
//post data using Async await method
app.post("/students", async(req,res) =>{
    try{
        const user = new Student(req.body);
        const usercreate = await user.save();
        res.status(201).send(user);
    }catch(e){
        res.status(400).send(e);
    }
})
//get all data at that adderess
app.get("/students",async(req,res)=>{
    try{
        const studentsdata=await Student.find();
        res.send(studentsdata);

    }catch(e){
        res.send(e);
    }
})
//get the individual student data using name
app.get("/students/:name",async(req,res) =>{
    try{
        const name = req.params.name;
        const studentData=await Student.find({name}).exec();
        if(!studentData)
        {
            return res.status(404).send();
        }else{
            res.send(studentData);
        }
    }catch(e){
        res.status(500).send(e);
    }
})
//delete student data using id
app.delete("/students/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(id);
        if(!id)
        {
            return res.status(404).send();
        }
        res.send(deleteStudent);
    }catch(e){
        res.status(500).send(e);

    }
})
//update the student by its id
app.patch("/students/:id", async (req,res)=>{
    try{
        const id = req.params.id;
       const updateStudent=await Student.findByIdAndUpdate(id,req.body,
        {
            new:true
        });
       res.send(updateStudent);
    }catch(e){
        res.status(404).send(e);
    }
})
app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})