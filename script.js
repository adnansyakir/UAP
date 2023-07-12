const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
    menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", windowPosition);
    menuNav.classList.remove("menu-active");
});

let start = 0;
otomatis();

function otomatis()
{
    const sliders = document.querySelectorAll(".sli");

    for (let i = 0; i < sliders.length; i++)
    {
        sliders[i].style.display = "none";
    }

    if (start >= sliders.length )
    {
        start = 0;
    }

    sliders[start].style.display = "block";
    console.log("gambar ke " +start)
    start++;

    setTimeout(otomatis, 2000);
}


