import react from "react";

import './Contact.css'

const contact =() => {
    return(
        <div class="contact">
        <form action="#" class="contact-form">
          <h2 class="title">Contact us</h2>
          <h5 class="description">Feel free to contact us if you want to ask any question, or you need help.
          </h5>
          <h6>We will contact you as soon as possible</h6>
          <div>
            <input type="text"  id="name" placeholder="Name" required/>
          </div>
          <div>
            <input type="email" id="name" placeholder="Email" required/>
          </div>
          <div>
            <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
          </div>
          <div class="submit-button-wrapper">
            <input type="submit" id="sendbtn" value="Send"/>
          </div>
        </form>
      </div>

            






    );

}
export default contact