// const navToggler = document.querySelector(".Toggler");

// navToggler.addEventListener("click",navToggle);
// function navToggle(){
//     console.log("hello boss")
// }

$('document').ready(function () {
    $('.Toggler').click(() => {
        $('.navbar').slideToggle(500)
    })
});