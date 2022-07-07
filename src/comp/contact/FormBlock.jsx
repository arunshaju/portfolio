import { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com"; 
const FormBlock = () =>{
	const initialValues = {name:"", email:"", subject:"", message:""}
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIssubmit] = useState(false);

	const handleChange = (e) =>{
		// console.log(e.target);
		const { name, value} = e.target;
		setFormValues({...formValues, [name]:value});
		// console.log(formValues);
	}
	const HandleSubmit = (e) =>{
		e.preventDefault();
		setFormErrors(validate(formValues));
		// console.log(Object.keys(formErrors).length);
		setIssubmit(true);
		
	}

	useEffect(()=>{
		// console.log(formErrors);
		var sucelement = document.getElementById("success-block");
		var failelement = document.getElementById("failure-block");
		if(Object.keys(formErrors).length === 0 && isSubmit){
			emailjs.sendForm('service_bqqdsak', 'template_j1si39j', document.getElementById("contactForm"), 'zx6_5Rfvoxx-5HsUe')
			.then((result) => {
				// console.log(result.text);
				sucelement.classList.add("show-block");
				failelement.classList.remove("show-block");
			}, (error) => {
				// console.log(error.text);
				sucelement.classList.remove("show-block");
				failelement.classList.add("show-block");
			});
		}
	})

	const validate = (values) =>{
		const errors = {}
		const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;
		if(!values.name){
			errors.name = "Name is required";
		}
		if(!values.email){
			errors.email = "Email is required";
		}else if(!regex.test(values.email)){
			errors.email = "This is not a valid email format!";
		}
		if(!values.subject){
			errors.subject = "Subject is required";
		}
		if(!values.message){
			errors.message = "Message is required";
		} else if(values.message.length < 8){
			errors.message = "Enter minimum 8 characters";
		}
		return errors;
	}
	return(
		<>
			<div className="home-stripe-contact-form" id="contactFormWrapper">
				<form onSubmit={HandleSubmit} id="contactForm">
					<div className="split-block">
						<div className="form-group">
							<input type="text" name="name" placeholder="Name" value={formValues.name} onChange={handleChange} />
							<label className="errors">{formErrors.name}</label>
						</div>
						<div className="form-group">
							<input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange} />
							<label className="errors">{formErrors.email}</label>
						</div>
					</div>
					<div className="full-block">
						<div className="form-group">
							<input type="text" name="subject" placeholder="Subject" value={formValues.subject} onChange={handleChange} />
							<label className="errors">{formErrors.subject}</label>
						</div>
					</div>
					<div className="full-block">
						<div className="form-group">
							<textarea name="message" id="message" value={formValues.message} onChange={handleChange}></textarea>
							<label className="errors">{formErrors.message}</label>
						</div>
					</div>
					<div className="full-block">
						<div className="form-group">
							<button type="submit" id="submitform">
								<FaPaperPlane />Send Message
							</button>
						</div>
					</div>
				</form>
				<div className="success-msg" id="success-block">
					<p>Thank you for connecting, I will get back you shortly </p>
				</div>
				<div className="failure-msg" id="failure-block">
					<p>Error while submit the form, please try again</p>
				</div>
			</div>
		</>
	)
}
export default FormBlock;