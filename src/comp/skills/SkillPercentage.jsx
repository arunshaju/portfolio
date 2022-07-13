import { useEffect,useState } from "react";
const SkillPercentage = (props) =>{
	const [skillSet,setskillSet] = useState(null);
	useEffect(()=>{
		setskillSet(props);
	},[props]);
	return(
			<>
			{
			skillSet &&
			<div className="home-stripe-skill-wrapper__skill-item">
				<div className="skill-item-name-with-score">
					<div className="skill-item__name">
						<div className="name">
							<h4>{skillSet.skill}</h4>
						</div>
					</div>
					<div className="skill-item__score">
						<div className="skill-item__percentage">
							<span>{skillSet.percentage + '%'}</span>
						</div>
					</div>
				</div>
				<div className="percentage-bar">
					<span style={{width: skillSet.percentage + '%'}}></span>
				</div>
			</div>
			}
			</>
	);
}
export default SkillPercentage;