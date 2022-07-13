import EduBlock from "./ExpBlock";
const Education = () =>{
    const ExpInfo = [
        {
            year: "2020 - 2022",
            course: "Mitsogo Technologies Pvt. Ltd.",
            description: "Front-end and WordPress Developer"
        },
        {
            year: "2019 - 2020",
            course: "Cyfer Solutions",
            description: "Front-end and WordPress Developer"
        },
        {
            year: "2018 - 2019",
            course: "Pixelflames Technologies",
            description: "Front-end and WordPress Developer"
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