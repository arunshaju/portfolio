import SkillPercentage from "./SkillPercentage";
const SkillFullBlock = () =>{
		const SoftSkillData = [
			{
				skill : "Leadership",
				percentage : "70",
			},
			{
				skill : "Leadership",
				percentage : "80",
			},
			{
				skill : "Leadership",
				percentage : "90",
			},
			{
				skill : "Leadership",
				percentage : "90",
			}
		];
		const HardSkillData = [
			{
				skill : "HTML5/CSS3/SASS",
				percentage : "70",
			},
			{
				skill : "Leadership",
				percentage : "80",
			},
			{
				skill : "Leadership",
				percentage : "90",
			},
			{
				skill : "Leadership",
				percentage : "90",
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