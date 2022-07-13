import { FaMapMarkerAlt,FaMobileAlt,FaEnvelope,FaGlobe,FaFacebookF,FaInstagram,FaLinkedinIn } from "react-icons/fa";
import PersonalDetails from "./PersonalDetails";
import SocialMedia from "./SocialMedia";
const ContactInfo = () =>{
	const PersonalDetailsData = [
		{
			title: "Address",
			icon: <FaMapMarkerAlt />,
			description: "Calicut, Kerala, India",
			linkitem: ""
		},
		{
			title: "Phone",
			icon: <FaMobileAlt />,
			description: "+91-9567782226",
			linkitem: "tel:+91-9567782226"
		},
		{
			title: "Email",
			icon: <FaEnvelope />,
			description: "arunshaju100@gmail.com",
			linkitem: "mailto:arunshaju100@gmail.com"
		},
		{
			title: "Website",
			icon: <FaGlobe />,
			description: "http://arunshaju.online",
			linkitem: "http://arunshaju.online"
		}
	];
	const SocialMediaData = [
		{
			icon: <FaLinkedinIn />,
			link: "https://www.linkedin.com/in/arun-shaju-764b0812a"
		},
		{
			icon: <FaInstagram />,
			link: "https://www.instagram.com/shajuarun/"
		},
		{
			icon: <FaFacebookF />,
			link: "https://www.facebook.com/arun.shaju.7"
		}
	];
    return(
        <>
					<div className="home-stripe__contact-wrapper">
						{
						PersonalDetailsData.map((val,index)=>{
							return <PersonalDetails key={index} title={val.title} icon={val.icon} description={val.description} linkitem={val.linkitem} />
						})
						}
					</div>
					<div className="contact-title">
						<h4>Social Media</h4>
					</div>
					<div className="home-stripe__social-media-wrapper">
						{
							SocialMediaData.map((val,index)=>{
								return <SocialMedia key={index} icon={val.icon} link={val.link} /> 
							})
						}
					</div>
        </>
    );
}
export default ContactInfo;