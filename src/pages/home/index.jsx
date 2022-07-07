import Homelayout from "../../templates/home/index";

const Homeblock = () =>{
  
  return(
    <>
    <div className="home-main">
      <div className="home__container-fluid">
        <div className="home-full-block">
          <Homelayout />
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Homeblock;