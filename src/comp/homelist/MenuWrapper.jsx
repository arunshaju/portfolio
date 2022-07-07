import NavItemBlock from "./NavItemBlock";
import { FaUserTie,FaRegFileAlt,FaShoppingBag,FaEnvelope } from "react-icons/fa";

const MenuWrapper = () =>{
	

	const Arraydata = [
		{
			white_text : "ABOUT",
			pink_text : "ME",
			color : "pink",
			icon : <FaUserTie />,
			menu : "about",
		},
		{
			white_text : "MY",
			pink_text : "RESUME",
			color : "yellow",
			icon : <FaRegFileAlt />,
			menu : "my_resume"
		},
		{
			white_text : "MY",
			pink_text : "PORTFOLIO",
			color : "green",
			icon : <FaShoppingBag />,
			menu : "my_portfolio",
		},
		{
			white_text : "CONTACT",
			pink_text : "ME",
			color : "blue",
			icon : <FaEnvelope />,
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