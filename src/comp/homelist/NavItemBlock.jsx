import { useEffect,useState } from "react";
// import { IoIosPerson } from "react-icons/io";
const NavItemBlock = (props) =>{
	// console.log(props);
	const [pageData,setPageData] = useState(null);
	useEffect(()=>{
		setPageData(props);
	},[props]);
	return(
		<>
			{
				pageData &&
				<a href={`#${pageData.menu}`} className={`home-menu-items__blocks home-menu-items__blocks--${pageData.color}`} id={`${pageData.menu}`}>
					<div className="home-menu-items__block-profile"> 
						{/* <IoIosPerson /> */}
						{pageData.icon}
					</div>
					<div className="home-menu-items__block-title"> 
						<h3 className="block-title__nav"><span className="color-white">{pageData.whiteText}</span><span className="color-advanced"> {pageData.primaryText}</span></h3>
					</div>
				</a>
			}
		</>
	);

}
export default NavItemBlock;