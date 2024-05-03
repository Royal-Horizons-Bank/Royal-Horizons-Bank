const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      siderbarOpen = document.querySelector(".siderbarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
        if (getMode && getMode === "dark-mode") {
            body.classList.toggle("dark");
        }
      

// this is for the DARK/LIGHT MODE Function, WAG MO KAKALIMUTAN PLS LANG 2 HOURS MO DENEBUD YN
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        //eto yung code para makeep anong mode kahit na refresh
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

      // this is for the Search Box
      searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active")
      });


      // this for toggler siderbar
      siderbarOpen.addEventListener("click" , () =>{
        nav.classList.add("active");
      });

    body.addEventListener("click" , e =>{
      let clickedElm = e.target;

      if (!clickedElm.classList.contains("siderbarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
      });












