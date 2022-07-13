import { FaMapMarkerAlt,FaMobileAlt,FaEnvelope,FaGlobe,FaFacebookF,FaInstagram,FaLinkedinIn,FaUserAlt,FaGlobeAsia } from "react-icons/fa";
import CommonTitle from "../../comp/titles/index";
import PersonalDetails from "../../comp/contact/PersonalDetails";
import SocialMedia from "../../comp/contact/SocialMedia";


const AboutMe = () =>{
  const TitleFirstElement = "ABOUT";
  const TitleSecondElement = "ME";
  const TextPrimaryColor = "pink";
  const PersonalDetailsData = [
    {
			title: "Name",
			icon: <FaUserAlt />,
			description: "Arun Shaju",
			linkitem: ""
		},
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
		},
    {
			title: "Nationality",
			icon: <FaGlobeAsia />,
			description: "India",
			linkitem: ""
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
        <div className="home-stripe-main home-stripe-main--about" id="about-section">
          <div className="home-stripe__full-blocks">
            <CommonTitle FirstText={TitleFirstElement} SecondText={TitleSecondElement} TextColor={TextPrimaryColor} />
            {/* Personal info starts */}
            <div className="home-stripe-com-bg-transperent">
              <div className="about-desc">
                <p>I am web developer from Kerala, India.  I am very passionate and dedicated to my work. I have 4 years more work experience. And enjoy working in a team or individual.</p>
              </div>
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
            </div>
            {/* Personal info ends */}
        
          </div>
        </div>

        </>
    );
}
export default AboutMe;