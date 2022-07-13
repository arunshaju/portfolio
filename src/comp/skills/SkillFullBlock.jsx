import SkillPercentage from "./SkillPercentage";
const SkillFullBlock = () =>{
		const SoftSkillData = [
			{
				skill : "Leadership",
				percentage : "80",
			},
			{
				skill : "Responsibility",
				percentage : "95",
			},
			{
				skill : "Teamwork",
				percentage : "90",
			},
			{
				skill : "Problem Solving",
				percentage : "88",
			},
			{
				skill : "Communication",
				percentage : "75",
			}
		];
		const HardSkillData = [
			{
				skill : "HTML5/CSS3/SASS",
				percentage : "90",
			},
			{
				skill : "WordPress/PHP",
				percentage : "85",
			},
			{
				skill : "Javascript/JQuery",
				percentage : "80",
			},
			{
				skill : "React JS",
				percentage : "60",
			},
			{
				skill : "MySQL",
				percentage : "50",
			}
		];
    return(
    <>
        <div className="home-stripe-skill-wrapper__block">
			<div className="home-stripe-skill-wrapper__title">
					<h4 className="home-stripe-skill-skill-title">Soft skills</h4>
			</div>
			<div className="home-stripe-skill-wrapper__skill-notations">
				{
					SoftSkillData.map((val,index)=>{
						return <SkillPercentage key={index} skill={val.skill} percentage={val.percentage}  />
					})
				}
			</div>
        </div>
		<div className="home-stripe-skill-wrapper__block">
			<div className="home-stripe-skill-wrapper__title">
				<h4 className="home-stripe-skill-skill-title">Hard skills</h4>
			</div>
			<div className="home-stripe-skill-wrapper__skill-notations">
				{
					HardSkillData.map((val,index) =>{
						return <SkillPercentage key={index} skill={val.skill} percentage={val.percentage} />
					})
				}
			</div>
		</div>
    </>
    );
}
export default SkillFullBlock;