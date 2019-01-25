function myFunction(){
    console.log(window.pageYOffset)
    if(window.pageYOffset >= 750){
        $(".sp-container h2").css({animation:''})
    }
}
// annulation de l'animation
$(".sp-container h2").css({animation:'none'});
