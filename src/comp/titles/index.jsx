const CommonTitle =(props) =>{
    return(
        <div className="home-stripe__full-blocks-title">
            <h2 className="full-blocks-title"><span className="color-white">{props.FirstText}</span><span className={`color-${props.TextColor}`}> {props.SecondText}</span></h2>
        </div>
    );
}
export default CommonTitle;