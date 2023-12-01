const jwt = require('jsonwebtoken');
const insidersSchema = require('../models/insiders');
const bcrypt = require('bcrypt');
exports.createInsider = async (req, res) => {
    try {
        const check=await insidersSchema.findOne({userId:req.body.userId});
        
        if(check===null){console.log(req.body)
        await insidersSchema.create(req.body)
            .then(() => {
                console.log("successfully added")
                return res.status(201).json({ success: true });
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json({ success: false });
            })
    }
    return res.status(200).json({ success: false, message:"Already registered" });
}
    catch (err) {
        console.log(err);
        return res.status(500).json({ success: false });
    }
}
exports.getinsider=async(req,res)=>{
    try{
        const data=await insidersSchema.findOne({userId:req.body.userId})
        return res.status(200).json(data)
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ success: false });
    }
}
exports.updateInsider = async (req, res) => {
        const userId = req.body.userId; 
        try {
            const insider = await insidersSchema.findOne({userId:req.body.userId});
        
            if (!insider) {
              return res.status(404).json({ success: false, message: 'insider not found' });
            }
            if (req.body.slotId) {
              insider.slotId = req.body.slotId;
            }
        
            if (req.body.endTime) {
              insider.endTime = req.body.endTime;
            }
        
            if (req.body.charges) {
              insider.charges = req.body.charges;
            }
        
            if (req.body.status) {
              insider.status = req.body.status;
            } if (req.body.state) {
              insider.state = req.body.state;
            }
        
            await insider.save();
        
            return res.status(200).json({ success: true, message: 'User profile updated successfully' });
          }
         catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}