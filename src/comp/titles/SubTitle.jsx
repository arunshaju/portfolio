const SubTitle = (props) =>{
    return(
        <>
        <div className="subtitle">
            <h3 className={`com-sub-title com-sub-title--${props.BorderColor}`}>{props.SubTitle}</h3>
        </div>
        </>
    );
}
export default SubTitle;