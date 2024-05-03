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











      const sizes = document.querySelectorAll('.size');
      const colors = document.querySelectorAll('.color');
      const shoes = document.querySelectorAll('.shoe');
      const gradients = document.querySelectorAll('.gradient');
      const shoeBg = document.querySelector('.shoeBackground');
      
      let prevColor = "blue";
      let animationEnd = true;
      
      function changeSize(){
          sizes.forEach(size => size.classList.remove('active'));
          this.classList.add('active');
      }
      
      function changeColor(){
          if(!animationEnd) return;
          let primary = this.getAttribute('primary');
          let color = this.getAttribute('color');
          let shoe = document.querySelector(`.shoe[color="${color}"]`);
          let gradient = document.querySelector(`.gradient[color="${color}"]`);
          let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);
      
          if(color == prevColor) return;
      
          colors.forEach(c => c.classList.remove('active'));
          this.classList.add('active');
      
          document.documentElement.style.setProperty('--primary', primary);
      
          shoes.forEach(s => s.classList.remove('show'));
          shoe.classList.add('show');
      
          gradients.forEach(g => g.classList.remove('first', 'second'));
          gradient.classList.add('first');
          prevGradient.classList.add('second');
      
          prevColor = color;
          animationEnd = false;
      
          gradient.addEventListener('animationend', () => {
              animationEnd = true;
          })
      }
      
      sizes.forEach(size => size.addEventListener('click', changeSize));
      colors.forEach(c => c.addEventListener('click', changeColor));
      
      let x = window.matchMedia("(max-width: 1000px)");
      
      function changeHeight(){
          if(x.matches){
              let shoeHeight = shoes[0].offsetHeight;
              shoeBg.style.height = `${shoeHeight * 0.9}px`;
          }
          else{
              shoeBg.style.height = "475px";
          }
      }
      
      changeHeight();
      
      window.addEventListener('resize', changeHeight);