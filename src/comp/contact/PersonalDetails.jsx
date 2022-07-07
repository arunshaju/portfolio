import { useEffect, useState } from "react";
const PersonalDetails = (props) =>{
	// console.log(props);
	const [PersonalData,setPersonalData] = useState(null);
	useEffect(()=>{
		setPersonalData(props);
	},[props])

	return(
		<>
			{
				PersonalData &&
			<div className="contact-wrapper-item">
				<div className="contact-wrapper-item__title">
					<h4>{PersonalData.title}</h4>
				</div>
				<div className="contact-wrapper__icon-with-details">
					{PersonalData.icon}
					{
					PersonalData.linkitem &&
					<a href={PersonalData.linkitem}>{PersonalData.description}</a>
					}
					{
					!PersonalData.linkitem &&
					<span>{PersonalData.description}</span>
					}
					
				</div>
			</div>
			}
		</>
	);
}
export default PersonalDetails;