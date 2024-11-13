import mongoose  from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type:String,required:true,unique:true},
    fullname:{type:String,required:true},
    email: {type:String,required:true,unique:true},
    phone:{type:Number,required:true,unique:true},
    password: {type:String,required:true},
    
   // confirmPassword: {type:String,required:true}
   //bankDetails: {bankName:String,accountNumber:String,ifscCode:String,balance:Number},
   //transactions:[{type:mongoose.Schema.Types.ObjectId, ref:"Transaction"}]
})

const UserModel = mongoose.model("User",UserSchema)

export {UserModel as User}