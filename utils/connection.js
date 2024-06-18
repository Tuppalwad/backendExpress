const mongoose= require('mongoose')
const { config } = require('dotenv')
config()
const url = process.env.URL ;
function connection(){
    mongoose.connect(url)
        .then(()=>console.log('connected'))
        .catch((err)=>console.log(err))
}       

module.exports = connection;