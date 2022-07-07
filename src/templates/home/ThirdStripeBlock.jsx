import { FaShoppingBag } from "react-icons/fa";
import CommonTitle from "../../comp/titles/index";
import SubTitle from "../../comp/titles/SubTitle";
import PortfolioWrapper from "../../comp/portfolio/index";

const ThirdStripeBlock = () =>{
		const TitleFirstElement = "PROJECTS";
		const TitleSecondElement = "";
		const TextPrimaryColor = "green";
    return(
        <>
        <div className="home-stripe-main home-stripe-main--three" id="portfolio_stripe">
          <div className="home-stripe__aside">
            <div className="home-stripe--one__logo">
              <FaShoppingBag />
            </div>
            <div className="home-stripe--one__block-name">
              <h4><span className="color-white">M</span><span className="color-white">Y</span> <span className="color-green letter-space-adj">P</span><span className="color-green">O</span><span className="color-green">R</span><span className="color-green">T</span><span className="color-green">F</span><span className="color-green">O</span><span className="color-green">L</span><span className="color-green">I</span><span className="color-green">O</span></h4>
            </div>
          </div>
          <div className="home-stripe__full-blocks">
						<CommonTitle FirstText={TitleFirstElement} SecondText={TitleSecondElement} TextColor={TextPrimaryColor} />
						<SubTitle SubTitle={"Projects"} BorderColor={"green"}/>
            <div className="home-stripe-com-bg-transperent">
              <PortfolioWrapper />
            </div>
					</div>
        </div>

        </>
    );
}
export default ThirdStripeBlock;