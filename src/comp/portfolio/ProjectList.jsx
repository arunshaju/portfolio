import { useEffect,useState } from "react";

const ProjectList = (props) =>{
    // console.log(props.image);
    const [projectData,setprojectData] = useState(null);
    useEffect(()=>{
        setprojectData(props);
    },[props]);
    return(
        <>
            {
            projectData &&
            <div className="portfolio-wrapper-item">
                <div className="portfolio-wrapper-item__img">
                    <img  src={projectData.image} alt="apta"/>
                </div>
                <div className="portfolio-wrapper-item__details">
                    <span className="name color-white">{projectData.pname}</span>
                    <span className="type color-sky-blue">{projectData.ptype}</span>
                </div>
            </div>
            }
        </>
    );
}
export default ProjectList;