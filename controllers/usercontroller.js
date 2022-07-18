const modelForthis = require('../models/modSchema.js');
const path = require("path");
const { userInfo } = require('os');


const create = (req, res) => {
    console.log("hello there is form");
    res.render("form");
  };

    const createDoc = async (req,res) => {

       //send data to mongo
        try{
            
            console.log("send data to mongo");
                         //const {name, email, image} = res.body
                         const doc = new modelForthis({
                         name:req.body.name,
                        email: req.body.email,
                          image: req.body.image   
            })
            //save this doc
                        const result = await doc.save();
                       console.log(result);
                          res.redirect("/index");
            }
                        catch(error){
            console.log(error);
                     }
      
                    }
    const getAllDoc =  async (req,res) => {
    
           //fetch all data from mongo
           console.log("saving data in form")
         const result = await modelForthis.find().populate("userid");
        // console.log(result);
        
         res.render('index', {result});
        
        
        
    }

   const editDoc =  async (req,res) => {
    try{
            const result= await modelForthis.findById(req.params.id);
            console.log(result);
            res.render("edit" , {data: result})
    }
    catch(error){console.log("error is there");}
        
       

    }
    const updateDoc = async (req,res) => {
        try{ const result = await modelForthis.findByIdAndUpdate(req.params.id, req.body);
            console.log(req.body);
            }
        catch(error){
            console.log(error);
        }
        
        res.redirect("/index" );
        
    }
  const deletebyid = async (req,res) => {
    try{

        const result = await modelForthis.findByIdAndDelete(req.params.id);
           res.redirect("/index") }
    catch(error){
console.log(error)
    }
       
    }


module.exports = {create, createDoc, getAllDoc, editDoc, deletebyid, updateDoc};