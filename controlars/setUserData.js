const userInfo= require('../module/info')

exports.setInfo = async (req,res)=>{
    const data= req.body
    console.log(data,"kklad")
    try {
        const info = await userInfo.create(data)
        res.status(200).send({message : "data added",data:info});
    } catch (error) {
        res.status(400).send({message:error})
    }
}

exports.getInfo = async (req,res)=>{
    try {
        const data= await userInfo.find()
        res.status(200).send({message:'your data',
            data:data
        })
    } catch (error) {
        res.status(500).send({message:"server error"})
    }
}

exports.updateInfo = async (req, res) => {
    const data = req.body; // Destructuring to extract the id and the rest of the data
    
    try {
        const item = await userInfo.findOne({ _id: data.id });
        if (item) {
            await userInfo.updateOne({ _id: data.id }, { $set: data.updateData });
            res.status(200).send({ message: "data updated successfully" });
        } else {
            res.status(404).send({ message: "item not found" });
        }
    } catch (error) {
        res.status(500).send({ message: "server error", error: error.message });
    }
};

exports.deletInfo = async (req,res)=>{
    const data = req.body;
    
    try {
        const item = await userInfo.deleteOne({_id:data.id});
        if(item){
            res.status(200).send({message:"deleted success"})
        }
        else{
            res.status(400).send({msessage:'data not found with this ID'});
        }
    } catch (error) {
       res.status(500).send({message:error});
    }
}