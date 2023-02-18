import React ,{ useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  
  const contact = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/contact", {
        name,
        email,
        phone,
        message,
      });
      
    navigate("/")
    toast.success('Your message has been sent successfully!',{autoClose: 120000});
    } catch (error) {
      toast.error(error.message)
    }
  };
    
  
  return (
 
     <section className=" container mx-auto flex justify-center mt-2  mb-2">
  <div className=" flex justify-center items-center  bg-white rounded-xl ">
    <div
      className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
    
      <div className="xl:ml-20 xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
        <form onSubmit={contact}>
          <div className="flex flex-row items-center justify-center mb-4 mt-5">
            <p className=" text-3xl font-bold">Contact Us</p>
           
          </div>
          
        

        
          <div className=" flex justify-center mb-3">
            <input
              type="text"
              className="border-4 border-gray-100 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg hover:border-gray-200 focus:outline-none"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              
              required
            />
          </div>
          <div className=" flex justify-center mb-3">
            <input
              type="email"
              className="border-4 border-gray-100 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg hover:border-gray-200 focus:outline-none"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            
              
              required
            />
          </div>

         
          <div className=" flex justify-center mb-6">
            <input
              type="number"
              className="border-4 border-gray-100 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg hover:border-gray-200 focus:outline-none"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
              required
            />
          </div>
          <div className=" flex justify-center mb-6">
            <textarea
            cols='30'
            rows='6'
              className="border-4 border-gray-100 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg hover:border-gray-200 focus:outline-none"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              required
            />
          </div>
          <div className=" flex justify-center text-center lg:text-left">
            <button
             type='submit'
              className=" border bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center"
            >
              Send Message
            </button>
            
          </div>
        </form>
        
      </div>
      <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
      <img
          src="data:image/jpeg;base64,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"
          className="w-full"
          alt="Sample image"
          
        />
      <Card sx={{ minWidth: 550 }}>
      <CardContent>
       
        <CardActions disableSpacing>
        <IconButton aria-label="share">
          <RoomIcon />
        </IconButton>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        29 rue Abou 1082 Tunis Tunisie
        </Typography>
       
        </CardActions>
        <CardActions disableSpacing>
        <IconButton aria-label="share">
          <AlternateEmailIcon />
        </IconButton>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        nouhahammami21@gmail.com
        </Typography>
        </CardActions>
        <CardActions disableSpacing>
        <IconButton aria-label="share">
          <PhoneIcon />
        </IconButton>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         (+216)79 49 36 84
        </Typography>
        </CardActions>
        
      </CardContent>
      
    </Card>
    
      </div>
    </div>
  </div>
</section>
   
 
  
  )
}
