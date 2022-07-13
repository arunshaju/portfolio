import ProfileImage from "../../assets/images/arun.png";
import Texture from "../../assets/images/arun-texture.png";
const profile = () =>{
    return(
        <div className="home-mian__profile" id="profile_block">
            <div className="profile-image-block">
                <img src={ProfileImage} alt="arun" />       
            </div>
            <div className="profile-texture">
                <img src={Texture} alt="arun shaju" />
            </div>
        </div>
    );
}
export default profile;