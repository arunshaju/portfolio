import { useState,useEffect } from "react";
const SocialMedia = (props) =>{
    const [SocialMedia,setSocialMedia] = useState(null);
    useEffect(()=>{
        setSocialMedia(props);
    },[props])
    return(
        <>
        {
            SocialMedia &&
            <a href={SocialMedia.link}  target="_blank" rel="noopener noreferrer"  className="social-media-icon">
                <div className="front-icon">
                    {SocialMedia.icon}
                </div>
                <div className="back-icon">
                    {SocialMedia.icon}
                </div>
            </a>
        }
        </>
    );
}
export default SocialMedia;