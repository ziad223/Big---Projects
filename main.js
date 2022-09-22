// Check And Put Option Color In Local Storage
let mainColor = localStorage.getItem("color-option");
if(mainColor !== null){
    document.documentElement.style.setProperty('--main-color' , localStorage.getItem("color-option"));

document.querySelectorAll(".colors-list li").forEach((element)=>{
    element.classList.remove("active");

    if(element.dataset.color === mainColor){
        element.classList.add("active")
    }
})
}


// Add class spin in setting box icon and show the menu
document.querySelector(".toggle-settings i").onclick = function() {
    this.classList.toggle("fa-spin");

document.querySelector(".settings-box").classList.toggle("open"); 
}

// Make Color Option
const colorsLi = document.querySelectorAll(".colors-list li");
 
colorsLi.forEach((li) =>{
    li.addEventListener("click" , (e) =>{
 document.documentElement.style.setProperty("--main-color", e.target.dataset.color) ;
 
    localStorage.setItem("color-option" , e.target.dataset.color);

colorsLi.forEach((ele)=>{
    ele.classList.remove("active")
})
  e.target.classList.add("active")
    }); 
});
let backgroundOption = true;

let backgroundInterval;

    // Add Random Background Option in Local Storage
  let backgroundItem = localStorage.getItem("background-option");

  if(backgroundItem !== null){

   if(backgroundItem === "true"){
    backgroundOption = true;
   }else{
    backgroundOption = false;
   
   }
  }

    

  

// Random Backgrounds option
const randomBackgroundEl = document.querySelectorAll(".random-background span");
 
randomBackgroundEl.forEach((span) =>{
    span.addEventListener("click" , (e) =>{ 

randomBackgroundEl.forEach((ele)=>{
    ele.classList.remove("active")
})
  e.target.classList.add("active");
  if(e.target.dataset.background === 'yes'){

        backgroundOption = true;
        randomizeImg();
        localStorage.setItem("background-option", true );


  }else{

    backgroundOption = false;
    clearInterval(backgroundInterval)
    localStorage.setItem("background-option", false );
    
  }
    }); 
});


   
// Make Random BackgroundImage
let landingPage = document.querySelector(".landing-page");
let imgsArray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
 


function randomizeImg() {
    if(backgroundOption === true){
      backgroundInterval = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
     landingPage.style.backgroundImage = 'url("img/'+imgsArray[randomNumber]+'")'      
        },4000);
    }
}
randomizeImg();


// Select Our Skills

let ourSkills = document.querySelector(".skills");

window.onscroll = function() {
    let skillsOffsetTop = ourSkills.offsetTop;
    let skillsOuterHeight = ourSkills.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.pageYOffset;

    if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight -windowHeight)){
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        })
    }
}
 
// Create Popup With The Image

let ourGallary = document.querySelectorAll(".gallary img");

ourGallary.forEach(img =>{
    img.addEventListener("click" , (e) =>{
        // Create overlay
        let overlay = document.createElement("div");
        overlay.className = 'popup-overlay';
        document.body.appendChild(overlay); 
        // Create Popup Box
        let popupBox = document.createElement("div");
        popupBox.className = 'popup-box';

        //  Create h3 Element in Popup Box
        let imgElement = document.createElement("h3");
        let imgText = document.createTextNode(img.alt);
        imgElement.appendChild(imgText);
        popupBox.appendChild(imgElement);

        // Create Img in Popup Box
        let popupImage = document.createElement("img");
        popupImage.src = img.src;
        popupBox.appendChild(popupImage);
        document.body.appendChild(popupBox);

    //    Create The Close Element (X) in Popup Box
    let closePopup = document.createElement("span");
    let closeText = document.createTextNode("X");
    closePopup.appendChild(closeText);
    closePopup.className = "close-popup";
    popupBox.appendChild(closePopup)

    // Close Popup Box
    closePopup.onclick = function() {
        popupBox.remove();
        overlay.remove();
        
    }
    })
})

// Loop on Bullets

const allBullets = document.querySelectorAll(".nav-bullets .bullet");
 
allBullets.forEach(bullet => {
    bullet.addEventListener("click" , (e) =>{
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior : 'smooth'
        });
    });
});

// Loop on Links

const allLinks = document.querySelectorAll(".links a");
 
allLinks.forEach(link => {
    link.addEventListener("click" , (e) =>{
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior : 'smooth'
        });
    });
});


// Handle Function

function handleActive(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach(element =>{
        element.classList.remove("active");
    })
    ev.target.classList.add("active")
}

// nav bullets option

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets-option");

if(bulletLocalItem !== null){
    bulletsSpan.forEach(span =>{
        span.classList.remove("active")
    })
    if(bulletLocalItem === 'block'){
        bulletsContainer.style.display = 'block';
        document.querySelector(".bullets-option .yes").classList.add("active");

    }else{
        bulletsContainer.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active");
        
    }
}

bulletsSpan.forEach(span =>{
    
    span.addEventListener("click" , (e) =>{
        
        if(span.dataset.display === 'show'){
            bulletsContainer.style.display = 'block';
            localStorage.setItem("bullets-option" , "block");
        }else{
            bulletsContainer.style.display = 'none';
            localStorage.setItem("bullets-option" , "none");
        }
        handleActive(e)
   
    })
   
})

// Reset Option Button

document.querySelector(".reset-options").onclick = function() {
    
    localStorage.clear();  
    // or
    // localStorage.removeItem("bullets-option");
    // localStorage.removeItem("color-option");
    // localStorage.removeItem("background-option");
    window.location.reload();
}