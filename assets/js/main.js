// window.alert("Welcome to Kushtia Polytechnic Institute 'KPI' press ok to continue");
// window.onload(alert(`wecolme to our site.`));
(() => {

  let navbar = document.querySelector('.navbar');
  let btn = document.querySelector(".navbar-toggler");
  let overBG = document.querySelector(".overBG");
  btn.addEventListener("click", () => {
    navbar.classList.toggle("navbarShow");
    overBG.classList.toggle("overBGShow");
    document.body.classList.toggle("hideScroll");

  });
  overBG.addEventListener("click", clear => {
    navbar.classList.remove("navbarShow");
    overBG.classList.remove("overBGShow");
    document.body.classList.remove("hideScroll");
    let show = document.querySelector(".show");
    show.classList.remove("show");

  })


})()

