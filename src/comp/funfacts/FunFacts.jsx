import { useState,useEffect } from "react";
const FunFacts = (props) =>{
    const [funFactsData,getfunFactsData] = useState(null);
    useEffect(()=>{
        getfunFactsData(props)
    },[props]);
    return(
        <>
        {
        funFactsData &&
        <div className="fun-facts-wrapper__item">
            <div className="fun-facts-wrapper-number">
                <span>{funFactsData.count}</span>
            </div>
            <div className="fun-facts-wrapper-description">
                <span>{funFactsData.description}</span>
            </div>
        </div>
        }
        </>
    );
}
export default FunFacts;