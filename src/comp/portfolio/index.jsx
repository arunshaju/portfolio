import ProjectList from "./ProjectList";
import AptaImage from "../../assets/images/apta.png";
import Quinza from "../../assets/images/quinza.png";
import Recruit from "../../assets/images/recruit121.png";
import Weconnect from "../../assets/images/weconnect.png";
import Mbru from "../../assets/images/mbru.png"

const ProjectWrapper = () =>{
	const ProjectData = [
		{
			image: AptaImage,
			pname: "Apta Advice",
			ptype: "WordPress Website"
		},
		{
			image: Mbru,
			pname: "MBR University",
			ptype: "WordPress Website"
		},
		{
			image: Quinza,
			pname: "QUINZE TECHNOLOGIES",
			ptype: "WordPress Website"
		},
		{
			image: Recruit,
			pname: "RECRUIT 121",
			ptype: "WordPress Website"
		},
		{
			image: Weconnect,
			pname: "Weconnect",
			ptype: "WordPress Website"
		}
	]
	return(
		<>
			<div className="home-stripe-portfolio-wrapper">
				{
					ProjectData.map((val,index)=>{
						return <ProjectList key={index} image={val.image} pname={val.pname} ptype={val.ptype} />
					})
				}
			</div>
		</>
	);
}
export default ProjectWrapper;