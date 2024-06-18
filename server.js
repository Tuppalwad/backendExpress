const { config } = require('dotenv')
const express = require('express')
const connection = require('./utils/connection')
const userRouter = require('./routes/userRoute')
const bodyParser = require('body-parser')
const app = express()
config()

const port = process.env.PORT 
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.status(200).send({message:"hellow "})
})  
app.post('/add', async (req,res)=>{
    const data= req.body
    console.log(req,'kkk')
    console.log(data,"kklad")
    try {
        const info = await userInfo.create(data)
        res.status(200).send({message : "data added",data:info});
    } catch (error) {
        res.status(400).send({message:error})
    }
})
app.use('/api',userRouter);
try {
    connection()
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })
} catch (error) {
    console.log(error) 
}
