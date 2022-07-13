import ProfileBlock from "../profile/index";
import FirstStripe from "./fistStripeBlock";
import SecondStripe from "./secondStripeBlock";
import ThirdStripeBlock from "./ThirdStripeBlock";
import FourthStripe from "./FourthStripe";
import AboutMe from "./AboutMe";
const Home = () =>{
    return(
      <>
      <div className="home-stripe home-stripe--one">
        <FirstStripe />
        <AboutMe />
        <SecondStripe />
        <ThirdStripeBlock />
        <FourthStripe />
        <ProfileBlock />
      </div>
      </>
      
    );
  }
  export default Home;