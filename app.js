const navbar = document.querySelector("nav");
console.log(navbar.clientHeight)

document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > navbar.clientHeight) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    };
});