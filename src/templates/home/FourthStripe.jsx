import { FaEnvelope } from "react-icons/fa";
import CommonTitle from "../../comp/titles/index";
import SubTitle from "../../comp/titles/SubTitle";
import ContactInfo from "../../comp/contact/index";
import ContactBlock from "../../comp/contact/ContactBlock";

const ThirdStripeBlock = () =>{
		const TitleFirstElement = "CONTACT";
		const TitleSecondElement = "ME";
		const TextPrimaryColor = "sky-blue";
    return(
        <>
        <div className="home-stripe-main home-stripe-main--four" id="contact_sec">
          <div className="home-stripe__aside">
            <div className="home-stripe--one__logo">
              <FaEnvelope />
            </div>
            <div className="home-stripe--one__block-name">
              <h4><span className="color-white">C</span><span className="color-white">O</span><span className="color-white">N</span><span className="color-white">T</span><span className="color-white">A</span><span className="color-white">C</span><span className="color-white">T</span> <span className="color-pink letter-space-adj">M</span><span className="color-pink">E</span></h4>
            </div>
          </div>
          <div className="home-stripe__full-blocks">
						<CommonTitle FirstText={TitleFirstElement} SecondText={TitleSecondElement} TextColor={TextPrimaryColor} />
						<SubTitle SubTitle={"Contact info"} BorderColor={"blue"}/>
            <div className="home-stripe-com-bg-transperent">
							<ContactInfo />
            </div>
            <SubTitle SubTitle={"Contact Form"} BorderColor={"blue"}/>
            <div className="home-stripe-com-bg-transperent">
              <ContactBlock />
            </div>
					</div>
        </div>

        </>
    );
}
export default ThirdStripeBlock;