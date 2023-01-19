const burgerMenu = document.querySelector(".burger-menu-link");

const ulList = document.querySelector(".ul-list")


// burger gap and list none if click 

function burgerListClose() {
    console.log("food");
    burgerMenu.classList.toggle("burger-menu-link-gap");
    ulList.classList.toggle("ul-list-none")
}

burgerMenu.addEventListener("click", burgerListClose)