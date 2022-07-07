import { FaRegIdCard,FaMapMarkerAlt,FaMobileAlt,FaEnvelope,FaGlobe,FaFacebookF,FaInstagram,FaLinkedinIn,FaUserAlt,FaGlobeAsia } from "react-icons/fa";
import CommonTitle from "../../comp/titles/index";
import SubTitle from "../../comp/titles/SubTitle";
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
			description: "http://arunshaju.me",
			linkitem: "http://arunshaju.me"
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
			link: "#li"
		},
		{
			icon: <FaInstagram />,
			link: "#insta"
		},
		{
			icon: <FaFacebookF />,
			link: "#fb"
		}
	];
    return(
        <>
        <div className="home-stripe-main home-stripe-main--about" id="about-section">
          <div className="home-stripe__aside">
            <div className="home-stripe--one__logo">
              <FaRegIdCard />
            </div>
            <div className="home-stripe--one__block-name">
              <h4><span className="color-white">A</span><span className="color-white">B</span><span className="color-white">O</span><span className="color-white">U</span><span className="color-white">T</span> <span className="color-pink letter-space-adj">M</span><span className="color-pink">E</span></h4>
            </div>
          </div>
          <div className="home-stripe__full-blocks">
            <CommonTitle FirstText={TitleFirstElement} SecondText={TitleSecondElement} TextColor={TextPrimaryColor} />
            {/* Personal info starts */}
            <SubTitle SubTitle={"Personal Info"} BorderColor={"pink"}/>
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