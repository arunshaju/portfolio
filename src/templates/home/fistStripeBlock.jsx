import { FaGlobe } from "react-icons/fa";
import NameAndDetails from "../../comp/nameblock/index";
import MenuWrapper from "../../comp/homelist/MenuWrapper";
const fistStripeBlock = () =>{
    return(
        <>
        <div className="home-stripe-main home-stripe-main--one" id="home-stripe">
          <div className="home-stripe__aside">
            <div className="home-stripe--one__logo">
              <FaGlobe />
            </div>
            <div className="home-stripe--one__block-name">
              <h4><span className="color-white">T</span><span className="color-white">R</span><span className="color-white">Y</span> <span className="color-orange letter-space-adj">H</span><span className="color-orange">A</span><span className="color-orange">R</span><span className="color-orange">D</span></h4>
            </div>
          </div>
          <div className="home-stripe__full-blocks">
            <NameAndDetails />
            <MenuWrapper />
          </div>
        </div>

        </>
    );
}
export default fistStripeBlock;