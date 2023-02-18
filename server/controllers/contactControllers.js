import Contact from "../model/contact.model.js";


export const contact = async (req, res) => {
   
   try {const contactExist=await Contact.findOne({email:req.body.email})
   if(contactExist){
       contactExist.message.push(req.body.message)
       
       const insertedmessage = await contactExist.save();
       res.status(201).json(insertedmessage);
   }else{
         const contact = new Contact(req.body);
       const insertedcontact = await contact.save();
       res.status(201).json(insertedcontact);
   }} catch (error) {
       res.status(400).json({message: error.message});
   }
}