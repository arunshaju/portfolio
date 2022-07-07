import EduBlock from "./EduBlock";
const Education = () =>{
    const EduInfo = [
        {
            year: "2014 - 2018",
            course: "B-Tech",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias provident perferendis in nesciunt."
        },
        {
            year: "Higher Secondary",
            course: "B-Tech",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias provident perferendis in nesciunt."
        },
        {
            year: "2014 - 2018",
            course: "B-Tech",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias provident perferendis in nesciunt."
        },
        {
            year: "2014 - 2018",
            course: "B-Tech",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias provident perferendis in nesciunt."
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