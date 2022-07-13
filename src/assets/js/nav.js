
const ClickTrigger = (e) =>{
    if(e === "about"){
        document.getElementById("home-stripe").classList.add("hide");
        document.getElementById("profile_block").classList.add("hide");
        document.getElementById("about-section").classList.add("active");
    }
    if(e === "my_resume"){
        document.getElementById("home-stripe").classList.add("hide");
        document.getElementById("profile_block").classList.add("hide");
        document.getElementById("my_resume_sec").classList.add("active");
    }
    if(e === "my_portfolio"){
        document.getElementById("home-stripe").classList.add("hide");
        document.getElementById("profile_block").classList.add("hide");
        document.getElementById("portfolio_stripe").classList.add("active");
    }
    if(e === "contact_me"){
        document.getElementById("home-stripe").classList.add("hide");
        document.getElementById("profile_block").classList.add("hide");
        document.getElementById("contact_sec").classList.add("active");
    }
}
const CloseBtn = () =>{
    document.getElementById("contact_sec").classList.remove("active");
    document.getElementById("portfolio_stripe").classList.remove("active");
    document.getElementById("my_resume_sec").classList.remove("active");
    document.getElementById("about-section").classList.remove("active");
    document.getElementById("home-stripe").classList.remove("hide");
    document.getElementById("profile_block").classList.remove("hide");
}

export {ClickTrigger,CloseBtn};
