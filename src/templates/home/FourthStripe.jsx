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