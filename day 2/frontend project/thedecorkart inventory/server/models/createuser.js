import mongoose  from 'mongoose'


const userSchema = mongoose.Schema({
    name:{
         type:'string',
         require: true
     },password:{
         type:'string',
         require:true
     }
 })

const Users = mongoose.model('Users',userSchema)

export default Users