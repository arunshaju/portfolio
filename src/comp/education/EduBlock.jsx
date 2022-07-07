import { useEffect,useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const EduBlock = (props) =>{
    const [eduData,seteduData] = useState(null);
    useEffect(()=>{
        seteduData(props);
    },[props])
    return(
        <>
        {
            eduData &&
            <div className="home-stripe-skill-wrapper__block">
                <div className="home-stripe-skill-wrapper__title">
                        <h4 className="home-stripe-skill-skill-title">{eduData.year}</h4>
                </div>
                <div className="home-stripe-skill-wrapper__skill-notations">
                    <div className="home-stripe-skill-wrapper__skill-item">
                        <div className="skill-item-name-with-score">
                            <div className="skill-item__name">
                                <div className="icon">
                                    <FaAngleDoubleRight />
                                </div>
                                <div className="name name--edu">
                                    <h4>{eduData.course}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="edu-desc">
                            <p>{eduData.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
}
export default EduBlock;