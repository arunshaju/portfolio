import CommonTitle from "../../comp/titles/index";
import SubTitle from "../../comp/titles/SubTitle";
import Skills from "../../comp/skills/index";
import Education from "../../comp/education/index";
import Experience from "../../comp/experience/index";
import FunFactsWrapper from "../../comp/funfacts/index";
import { saveAs } from "file-saver";
import Resume from "../../assets/files/arun-shaju2022.pdf";
import DownloadIcon from "../../assets/images/document-download.png";
const secondStripeBlock = () =>{
  const TitleFirstElement = "MY";
  const TitleSecondElement = "RESUME";
  const TextPrimaryColor = "yellow";
  const saveFile = () => {
    saveAs(
      Resume,
      "arunshaju.pdf"
    );
  };
    return(
        <>
        <div className="home-stripe-main home-stripe-main--two" id="my_resume_sec">
          <div className="home-stripe__full-blocks">
            <CommonTitle FirstText={TitleFirstElement} SecondText={TitleSecondElement} TextColor={TextPrimaryColor} />
            {/* skills starts */}
            {/* <SubTitle SubTitle={"Skills"} BorderColor={"yellow"}/> */}
            <div className="home-stripe-com-bg-transperent">
              <Skills />
            </div>
            {/* skills ends */}
            {/* Education starts */}
            <SubTitle SubTitle={"Education"} BorderColor={"yellow"}/>
            <div className="home-stripe-com-bg-transperent">
              <Education />
            </div>
            {/* Education ends */}

            {/* Experience starts */}
            <SubTitle SubTitle={"Experience"} BorderColor={"yellow"}/>
            <div className="home-stripe-com-bg-transperent">
              <Experience />
            </div>
            {/* Experience ends */}

            {/* Facts starts */}
            <div className="home-stripe-com-bg-transperent home-stripe-com-bg-transperent--fun">
            <FunFactsWrapper />
            </div>
            {/* Facts ends */}
            {/* Download button starts */}
            <div className="download-wrapper">
              <button className="com-resume-download" id="resume-download" onClick={saveFile}>
                <span className="color-white">Download my CV </span><span className="file-icon"><img src={DownloadIcon} alt="" /></span>
              </button>
            </div>
            {/* Download button ends */}
          </div>
        </div>

        </>
    );
}
export default secondStripeBlock;