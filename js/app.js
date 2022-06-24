const icons = document.querySelectorAll(".navbar");

function activeIcon() {
    icons.forEach((icon)=>
    icon.classList.remove("active-icon"));      
    this.classList.add("active-icon");
};


icons.forEach((icon)=>
icon.addEventListener("click", activeIcon));
