import FunFacts from "./FunFacts";
import { FaBusinessTime,FaHandshake,FaHeart } from "react-icons/fa";

const FunFactsWrapper = () =>{
    const FunFactsData = [
        {
            icon: <FaBusinessTime />,
            count: "4",
            description: "Year of experience"
        },
        {
            icon: <FaHandshake />,
            count: "60+",
            description: "Done projects"
        },
        {
            icon: <FaHeart />,
            count: "13+",
            description: "Happy customers"
        }
    ];
    return(
        <>
        <div className="home-stripe-fun-facts-wrapper">
            {
                FunFactsData.map((val,index)=>{
                    return <FunFacts key={index} icon={val.icon} count={val.count} description={val.description} />
                })
            }

        </div>
        </>
    );
}
export default FunFactsWrapper;