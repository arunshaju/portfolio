import EduBlock from "./ExpBlock";
const Education = () =>{
    const ExpInfo = [
        {
            year: "2020 - 2022",
            course: "Mitsogo",
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
                    ExpInfo.map((val,index)=>{
                        return <EduBlock key={index} year={val.year} course={val.course} description={val.description} />
                    })
                }
                
            </div>
        </>
    );
}
export default Education;