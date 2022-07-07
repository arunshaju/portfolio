// alert(1);

    window.addEventListener("load", startup);

    function startup() {
    
      document.getElementById("about").addEventListener("click", AboutFunc);
      document.getElementById("my_resume").addEventListener("click", myresumeFunc);
      document.getElementById("my_portfolio").addEventListener("click", myportfolioFunc);
      document.getElementById("contact_me").addEventListener("click", contactmeFunc);
      document.getElementById("close-details").addEventListener("click", closeBtnFunc);
    }
    
    
    function hideHome(){
        document.getElementById("home-stripe").style.cssText = "display:none; opacity: 0; transform: scale(1.2); visibility: hidden;";
    }
    
    function AboutFunc(){
        document.getElementById("about-section").style.display = "flex";
        hideHome();
        document.getElementById("close-details").style.visibility = "visible";
    
        setInterval(() => {
            document.getElementById("about-section").style.cssText = "display:flex; opacity: 1; transform: scale(1); visibility: visible;";
        }, 50);
    }
    function myresumeFunc(){
        document.getElementById("my_resume_sec").style.display = "flex";
        hideHome();
        document.getElementById("close-details").style.visibility = "visible";
    
        setInterval(() => {
            document.getElementById("my_resume_sec").style.cssText = "display:flex; opacity: 1; transform: scale(1); visibility: visible;";
        }, 50);
    }
    function myportfolioFunc(){
        document.getElementById("portfolio_stripe").style.display = "flex";
        hideHome();
        document.getElementById("close-details").style.visibility = "visible";
    
        setInterval(() => {
            document.getElementById("portfolio_stripe").style.cssText = "display:flex; opacity: 1; transform: scale(1); visibility: visible;";
        }, 50);
    }
    function contactmeFunc(){
        document.getElementById("contact_sec").style.display = "flex";
        hideHome();
        document.getElementById("close-details").style.visibility = "visible";
    
        setInterval(() => {
            document.getElementById("contact_sec").style.cssText = "display:flex; opacity: 1; transform: scale(1); visibility: visible;";
        }, 50);
    }
    
    
    function hideAbout(){
        document.getElementById("about-section").style.cssText = "display:none; opacity: 0; transform: scale(1.2); visibility: hidden;";
    }
    function hideResume(){
        document.getElementById("my_resume_sec").style.cssText = "display:none; opacity: 0; transform: scale(1.2); visibility: hidden;";
    }
    function hidePortfolio(){
        document.getElementById("portfolio_stripe").style.cssText = "display:none; opacity: 0; transform: scale(1.2); visibility: hidden;";
    }
    function hideContact(){
        document.getElementById("contact_sec").style.cssText = "display:none; opacity: 0; transform: scale(1.2); visibility: hidden;";
    }
    function closeBtnFunc(){
        hideAbout();
    
        document.getElementById("close-details").style.visibility = "hidden";
        hideResume();
        hidePortfolio();
        hideContact();
        document.getElementById("home-stripe").style.display = "flex";
        setInterval(() => {
            document.getElementById("home-stripe").style.cssText = "display:flex; opacity: 1; transform: scale(1); visibility: visible;";
        }, 50);
    }



