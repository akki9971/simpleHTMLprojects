// const navToggler = document.querySelector(".Toggler");

// navToggler.addEventListener("click",navToggle);
// function navToggle(){
//     let show = document.querySelector(".navbar");
//     if(show.style.display='none'){
//     show.style.display='block';
//     // return false;
//     }else if(show.style.display='block'){
//         show.style.display='none';
//     //    return true
//     }
// }



$('document').ready(function () {
    $('.Toggler').click(() => {
        $('.navbar').slideToggle(500)
    })
});