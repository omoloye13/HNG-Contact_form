import zuriLogo from "./images/zuri_logo.svg";
import ingLogo from "./images/ing_logo.svg";
const ContactForm = () => {
    const name = "Folashade";
  return (
    <>
      <main>
        <div className="cart">
          <div className="top_content">
            <h1>Contact Me</h1>
            <p>
              Hi there, contact me to ask me about anything you have in mind
            </p>
          </div>
          <form>
            <div className="input_content">
              <div className="fname">
                <label for="firstName">First name</label>
                <br />
                <input
                  type="text"
                  id="first_name"
                  name="firstname"
                  placeholder="Enter your first name"
                  className="f_name"
                />
              </div>
              <div className="lname">
                <label for="lastName">Last name</label>
                <br />
                <input
                  type="text"
                  id="last_name"
                  name="lastname"
                  placeholder="Enter your last name"
                  className="l_name"
                />
              </div>
            </div>
            <div className="mail">
              <label for="email">Email</label>
              <br />
              <input
                type="email"
                id="email"
                name="Email"
                placeholder="yourname@email.com"
                className="e_mail"
              />
            </div>
            <div className="area">
              <label for="message">Message</label>
              <br />
              <textarea
                name="Message"
                id="message"
                placeholder="Send me a message and I'll reply you as soon as possible..."
                className="textarea"
              />
            </div>
            <div className="check">
              <input
                type="checkbox"
                id="check_box"
                name="Check"
                className="tick"
                required
              />
              <label className="box" for="checkbox"> You agree to providing your data to <span className="row">{name} who may contact you.</span></label>
              <br />
            </div>
            <div className="wrapper">
            <button id="btn__submit" className="pill">Send message</button>
            </div>
          </form>
          <hr className="line_two" />
          <footer>
            <div className="footer_two">
              <img src={zuriLogo} alt="Zuri_logo" />
              <div className="text">HNG Internship 9 Frontend Task</div>
              <img src={ingLogo} alt="Ing_logo" />
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default ContactForm;
