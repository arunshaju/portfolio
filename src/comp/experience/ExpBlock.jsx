import { useEffect,useState } from "react";
const EduBlock = (props) =>{
    const [expData,setexpData] = useState(null);
    useEffect(()=>{
        setexpData(props);
    },[props])
    return(
        <>
        {
            expData &&
            <div className="home-stripe-skill-wrapper__block">
                <div className="home-stripe-skill-wrapper__title">
                        <h4 className="home-stripe-skill-skill-title">{expData.year}</h4>
                </div>
                <div className="home-stripe-skill-wrapper__skill-notations">
                    <div className="home-stripe-skill-wrapper__skill-item">
                        <div className="skill-item-name-with-score">
                            <div className="skill-item__name">
                                <div className="name name--edu">
                                    <h4>{expData.course}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="edu-desc">
                            <p>{expData.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
}
export default EduBlock;