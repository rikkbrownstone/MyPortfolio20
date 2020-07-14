// alert("Sorry the site is under construction. But feel free to navigate.");

//navigation black hovering
// $(window).on("scroll", function() {
//     if ($(window).scrollTop()) {
//       $("nav").addClass("black");
//     } else {
//       $("nav").removeClass("black");
//     }
//   });


$.each( $('*'), function() { 
  if( $(this).width() > $('body').width()) {
      console.log("Wide Element: ", $(this), "Width: ", $(this).width()); 
  } 
});

//works slider
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 7000); // Change image every 7 seconds
}

//contacts
