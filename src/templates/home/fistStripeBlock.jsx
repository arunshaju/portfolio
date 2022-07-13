import NameAndDetails from "../../comp/nameblock/index";
import MenuWrapper from "../../comp/homelist/MenuWrapper";
const fistStripeBlock = () =>{
    return(
        <>
        <div className="home-stripe-main home-stripe-main--one" id="home-stripe">
          <div className="home-stripe__full-blocks">
            <NameAndDetails />
            <MenuWrapper />
          </div>
        </div>

        </>
    );
}
export default fistStripeBlock;