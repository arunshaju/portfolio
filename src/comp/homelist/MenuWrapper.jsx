import NavItemBlock from "./NavItemBlock";

const MenuWrapper = () =>{
	
	const Arraydata = [
		{
			white_text : "About Me",
			pink_text : "ME",
			color : "pink",
			icon : "about",
			menu : "about",
		},
		{
			white_text : "My Resume",
			pink_text : "RESUME",
			color : "yellow",
			icon : "resume",
			menu : "my_resume"
		},
		{
			white_text : "My Portfolio",
			pink_text : "PORTFOLIO",
			color : "green",
			icon : "portfolio",
			menu : "my_portfolio",
		},
		{
			white_text : "Contact Me",
			pink_text : "ME",
			color : "blue",
			icon : "contact",
			menu : "contact_me",
		}
	];


    return(
			<>
				<div className="home-menu-items">
					{
						Arraydata.map((val,index)=>{
							return <NavItemBlock key={index} whiteText={val.white_text} primaryText={val.pink_text} color={val.color} icon={val.icon} styleItem={val.add_style} menu={val.menu} />
						})	
					}
				</div>
			</>
    );
}
export default MenuWrapper; 