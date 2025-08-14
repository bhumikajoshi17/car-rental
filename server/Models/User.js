import mongoose from "mongoose"
import moongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {type: String,required :true},
    email: {type: String,required :true , unique:true},
    password: {type: String,required :true },
    role: {type: String,enum:["owner" , "user"], default:'user'},
    image: {type: String,default:''},

},{timestamps:true})

const User = moongoose.model('User', userSchema)

export default User