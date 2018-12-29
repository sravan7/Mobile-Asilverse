let modal = document.querySelector(".modal");
          let closebtn = document.querySelector(".closebtn")
          modal.onclick = function(event){
            if(event.target.tagName==="A"){
              //console.log(event.target.tagName);
              modal.style.display = "none";
            }
          }
          function showmenu(){
            modal.style.display = "block";
          }

          closebtn.onclick = function(){
            modal.style.display = "none";
          }
          let sliderBtns = document.getElementsByClassName("slider-btn");
          let btns = Array.from(sliderBtns)
          let caroselContent = document.getElementsByClassName("carosel-content");
          let content = Array.from(caroselContent);
          let test = (i) =>
          {
            //console.log(content[i])
            let elem = content[i]
            if(elem.classList.contains("carosel-none"))
              {
                //console.log("if fn")
               const newEl = content.filter(item =>  item!==elem).map(item => item.classList.add("carosel-none"))
                elem.classList.remove("carosel-none");
              }
          }
          for (let elem of sliderBtns)
          {
            elem.addEventListener('click',(e) => {
              //elem.classList.toggle("slider-active");
              
              if(elem.classList.contains("slider-active"))
              {
                //console.log("if")
               const newEl = btns.filter(item =>  item!==elem).map(item => item.classList.remove("slider-active"))
                //console.log(newEl);
              }
              else{
                //console.log("else")
                test(btns.indexOf(elem))
                const newEl = btns.filter(item =>  item!==elem).map(item => item.classList.remove("slider-active"))
                elem.classList.add("slider-active");
              }
                //console.log(e,elem.classList.contains("slider-active"))
            })
          }
          //console.log(sliderBtns);