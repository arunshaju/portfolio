import { useEffect,useState } from "react";
import {ClickTrigger} from "../../assets/js/nav";
const NavItemBlock = (props) =>{
	// console.log(props);
	const [pageData,setPageData] = useState(null);
	useEffect(()=>{
		setPageData(props);
	},[props]);
	function handleClickEvent(e){
		ClickTrigger(e);
	}

	function iconSelectEvent(){
		if(pageData.icon === "about" && pageData){
			return(
				<svg xmlns="http://www.w3.org/2000/svg" width="46.588" height="46.588" viewBox="0 0 46.588 46.588">
					<g id="vuesax_broken_personalcard" data-name="vuesax/broken/personalcard" transform="translate(-172 -252)">
						<g id="personalcard" transform="translate(172 252)">
						<path id="Vector" d="M0,9.706C0,1.941,1.941,0,9.706,0H29.118c7.765,0,9.706,1.941,9.706,9.706V25.235c0,7.765-1.941,9.706-9.706,9.706H9.706C1.941,34.941,0,33,0,25.235V18.247" transform="translate(3.882 5.824)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-2" data-name="Vector" d="M0,0H9.706" transform="translate(27.176 15.529)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-3" data-name="Vector" d="M0,0H7.765" transform="translate(29.118 23.294)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-4" data-name="Vector" d="M0,0H3.882" transform="translate(33 31.059)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-5" data-name="Vector" d="M7.027,3.514A3.514,3.514,0,1,1,3.514,0,3.514,3.514,0,0,1,7.027,3.514Z" transform="translate(12.986 14.889)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-6" data-name="Vector" d="M13.588,5.353A5.863,5.863,0,0,0,8.269.073a14.986,14.986,0,0,0-2.951,0A5.88,5.88,0,0,0,0,5.353" transform="translate(9.706 26.347)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-7" data-name="Vector" d="M0,0H46.588V46.588H0Z" fill="none" opacity="0"/>
						</g>
					</g>
				</svg>
			);
		}
		if(pageData.icon === "resume" && pageData){
			return(
				<svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47">
					<g id="document-code-2" transform="translate(-300 -252)">
						<path id="Vector" d="M35.25,25.433V9.792C35.25,3.917,32.313,0,25.458,0H9.792C2.938,0,0,3.917,0,9.792V23.5" transform="translate(305.875 255.917)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-2" data-name="Vector" d="M0,9.792H9.792c6.854,0,9.792-3.917,9.792-9.792" transform="translate(321.542 285.292)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-3" data-name="Vector" d="M0-2.792V3.917A3.928,3.928,0,0,0,3.917,7.833h6.276" transform="translate(328.396 260.813)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-4" data-name="Vector" d="M3.917,0,0,3.917,3.917,7.833" transform="translate(303.917 285.292)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-5" data-name="Vector" d="M0,0,3.917,3.917,0,7.833" transform="translate(313.708 285.292)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-6" data-name="Vector" d="M0,0H47V47H0Z" transform="translate(300 252)" fill="none" opacity="0"/>
					</g>
				</svg>
			);
		}
		if(pageData.icon === "portfolio" && pageData){
			return(
				<svg xmlns="http://www.w3.org/2000/svg" width="44.557" height="44.557" viewBox="0 0 44.557 44.557">
					<g id="vuesax_broken_code-circle" data-name="vuesax/broken/code-circle" transform="translate(-108 -252)">
						<g id="code-circle" transform="translate(108 252)">
						<path id="Vector" d="M3.713,0,0,3.713,3.713,7.426" transform="translate(11.139 18.565)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-2" data-name="Vector" d="M0,0,3.713,3.713,0,7.426" transform="translate(29.704 18.565)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-3" data-name="Vector" d="M3.713,0,0,8.651" transform="translate(20.422 17.953)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-4" data-name="Vector" d="M0,0H44.557V44.557H0Z" fill="none" opacity="0"/>
						<path id="Vector-5" data-name="Vector" d="M3.713,7.426A18.565,18.565,0,1,0,18.565,0a18.315,18.315,0,0,0-7.482,1.578" transform="translate(3.713 3.713)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						</g>
					</g>
				</svg>
			);
		}
		if(pageData.icon === "contact" && pageData){
			return(
				<svg xmlns="http://www.w3.org/2000/svg" width="45.154" height="45.154" viewBox="0 0 45.154 45.154">
					<g id="vuesax_broken_sms-tracking" data-name="vuesax/broken/sms-tracking" transform="translate(-620 -252)">
						<g id="sms-tracking" transform="translate(620 252)">
						<path id="Vector" d="M28.221,0V4.741c0,6.585-3.763,9.407-9.407,9.407H0" transform="translate(13.17 24.421)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-2" data-name="Vector" d="M0,9.407C0,2.822,3.763,0,9.407,0H28.221c5.644,0,9.407,2.822,9.407,9.407" transform="translate(3.763 6.585)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-3" data-name="Vector" d="M18.814,0,12.925,4.7a5.956,5.956,0,0,1-7.055,0L0,0" transform="translate(13.17 16.933)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-4" data-name="Vector" d="M0,0H11.288" transform="translate(3.763 31.043)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-5" data-name="Vector" d="M0,0H5.644" transform="translate(3.763 23.518)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
						<path id="Vector-6" data-name="Vector" d="M0,0H45.154V45.154H0Z" fill="none" opacity="0"/>
						</g>
					</g>
				</svg>
			);
		}
	}


	return(
		<>
			{	
				pageData &&
				<a href={`#${pageData.menu}`} className={`home-menu-items__blocks home-menu-items__blocks--${pageData.color}`} id={`${pageData.menu}`} onClick={(e)=>{e.preventDefault();handleClickEvent(pageData.menu)}}>
					<div className="home-menu-items__block-profile"> 
						{iconSelectEvent()}
					</div>
					<div className="home-menu-items__block-title"> 
						<h3 className="block-title__nav">{pageData.whiteText}</h3>
					</div>
				</a>
			}
		</>
	);

}
export default NavItemBlock;