import EduBlock from "./EduBlock";
const Education = () =>{
    const EduInfo = [
        {
            year: "2014 - 2018",
            course: "B-Tech",
            description: "Computer Science And Engineering - University of Calicut"
        },
        {
            year: "2012 - 2014",
            course: "Higher Secondary",
            description: "Kerala State Education Board."
        },
        {
            year: "2012",
            course: "Secondary Education",
            description: "Kerala State Education Board."
        }
    ];
    return(
        <>
            <div className="home-stripe-skill-wrapper home-stripe-skill-wrapper--edu">
                {
                    EduInfo.map((val,index)=>{
                        return <EduBlock key={index} year={val.year} course={val.course} description={val.description} />
                    })
                }
                
            </div>
        </>
    );
}
export default Education;