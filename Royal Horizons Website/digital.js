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















const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

let secValue = 11,
  minValue = 2,
  hourValue = 2,
  dayValue = 9;

const timeFunction = setInterval(() => {
  secValue--;

  if (secValue === 0) {
    minValue--;
    secValue = 60;
  }
  if (minValue === 0) {
    hourValue--;
    minValue = 60;
  }
  if (hourValue === 0) {
    dayValue--;
    hourValue = 24;
  }

  if (dayValue === 0) {
    clearInterval(timeFunction);
  }
  seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
  minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
  hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
  days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000); //1000ms = 1s
