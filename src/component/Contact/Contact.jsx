import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from "../../assets/white-arrow.png"
function Contact() {
  const [result, setResult] = React.useState("");

const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);

  formData.append("access_key", "587b22e2-f3b8-495d-b383-c47f61c5e708");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  if (data.success) {
    setResult("Form Submitted Successfully");
    event.target.reset();
  } else {
    console.log("Error", data);
    setResult(data.message);
  
  }
};




  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>We are avaliable  24X7
            </p>
            <ul>
            <li><img src={mail_icon}alt="" /> mahheshjnv@gmail.com</li>
            <li><img src={phone_icon } alt="" /> +916390533183</li>
            <li><img src={location_icon} alt="" /> Saidabad Handia Prayagraj</li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <level>Your Name </level>
            <input type="text" name='name' placeholder='Enter Your Name'required />
            <level>Phone Number </level>
            <input type="tel" name='phone' placeholder='Enter Your Mobile No..'required />
            <level>Message </level>
          <textarea name="message"rows="6" placeholder='Enter Your Message' required />  
             <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>     
                  </form>
                  <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact