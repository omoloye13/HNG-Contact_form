const ContactForm = () => {
    return ( 
        <>
        {/* <section className="section"> */}
        <div className="cart">
            <div className="top_content">
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind</p>
            </div>
            <form>
            <div className="input_content">
            <div className="fname">
            <label for="firstName">First name</label><br/>
            <input type="text" id="first_name" name="firstname" placeholder="Enter your first name" className="f_name"/>
            </div>
            <div className="lname">
            <label for="lastName">Last name</label><br/>
            <input type="text" id="last_name" name="lastname" placeholder="Enter your last name" className="l_name"/>

            </div>
           
            </div>


            </form>
        </div>

        {/* </section> */}
     
        </>
     );
}
 
export default ContactForm;