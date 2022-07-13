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