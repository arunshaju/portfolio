import { FaChevronLeft } from "react-icons/fa";
import {CloseBtn} from "../../assets/js/nav";
const CommonTitle =(props) =>{
    function CloseHandle(){
        CloseBtn();
    }
    return(
        <div className="home-stripe__full-blocks-title">
            <div className="logo-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="44.995" height="27.371" viewBox="0 0 44.995 27.371"><g id="Group_9" data-name="Group 9" transform="translate(274.727 -330.318)" opacity="0.5"><path id="Path_122" data-name="Path 122" d="M-188.4,358.211c-.219-.953-.381-1.613-.522-2.278-.982-4.646-3.59-7.213-8.241-8.1-6.044-1.156-10.2-6.959-8.881-12.559a26.458,26.458,0,0,1,1.613-3.955l.475.08c.226.864.458,1.727.678,2.592,1.05,4.129,3.579,6.678,7.833,7.468a11.093,11.093,0,0,1,9.161,8.729C-185.7,352.947-186.274,355.3-188.4,358.211Z" transform="translate(-44.486 -0.649)" fill="#fff"></path><path id="Path_123" data-name="Path 123" d="M-265.325,393.36h-9.4l4.692-8.166Z" transform="translate(0 -35.671)" fill="#fff"></path><path id="Path_124" data-name="Path 124" d="M-168.32,338.479l-4.694-8.161h9.4Z" transform="translate(-66.116)" fill="#fff"></path><path id="Path_125" data-name="Path 125" d="M-236.026,330.86c-1.145,2-2.138,3.636-3.009,5.333a1.907,1.907,0,0,0,.125,1.435q4.716,10.214,9.464,20.414h6.162Z" transform="translate(-23.139 -0.352)" fill="#fff"></path></g></svg>
            </div>
            <div className="back-to-action">
                <a href="#home" onClick={CloseHandle}><FaChevronLeft />Go back</a>
            </div>
        </div>
    );
}
export default CommonTitle;