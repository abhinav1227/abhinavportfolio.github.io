const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");

function pageTransitions() {
    //Button click actuve class(only considering the active class on click)
    sectBtn.forEach(function(ele) {
        ele.addEventListener("click", function(e){
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
            this.className += "active-btn";
        })
    })
    // for(let i=0; i < sectBtn.length; i++) {
    //     sectBtn[i].addEventListener('click', function() {
    //         let currentBtn = document.querySelectorAll(".active-btn");
    //         currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
    //         this.className += "active-btn";
    //     })

    // }

    // allSections.addEventListener('click', function(e){
    //     console.log(e.target);
    // })
    // Sections Active class
    allSections.forEach(function(ele) {
        ele.addEventListener("click", (e)=>{
            const id = e.target.dataset.id ;
            if(id){
                // remove selected(active class) from each btns
                //sectBtns.forEach((btn)=>{
                //     btn.classList.remove("active")
                // })
                // e.target.classList.add("active")

                // hide active class in sections
                sections.forEach((section)=>{
                    section.classList.remove("active")
                })
                const element = document.getElementById(id);
                element.classList.add("active");
            }
        }) 
   
    })
    //Toggle theme
    const themeBtn = document.querySelector(".theme-btn")
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle("dark-mode")
    })
        
}
pageTransitions();

 // allSections.addEventListener("click", (e) => {
    //     const id = e.target.dataset.id ;
    //     if(id){
    //         // remove selected(active class) from each btns
    //         sectBtns.forEach((btn)=>{
    //             btn.classList.remove("active")
    //         })
    //         e.target.classList.add("active")

    //         // hide active class in sections
    //         sections.forEach((section)=>{
    //             section.classList.remove("active")
    //         })

    //         const element = document.getElementById(id);
    //         element.classList.add("active");
    //     }