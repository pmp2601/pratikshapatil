const mongoose = require("mongoose");
const url ="mongodb://127.0.0.1:27017/socialApp";

const userSchema = new mongoose.Schema(
    {
        _id: Number,
        username: String,
        email: String,
    },
    {
        _id: false
    }
);
const User = new mongoose.model("users",userSchema);
async function run()
{
    try{
        await mongoose.connect(url);
        const user = User({ name:"Pratiksha",email:"1903049@ritindia.edu",_id:2});
        await user.save();
        const docs = await User.find({});
        docs.forEach((doc) =>console.log(doc));
        
    } catch(error){
        console.error(error);
    }finally{
        await mongoose.disconnect();
    }
}
run();
