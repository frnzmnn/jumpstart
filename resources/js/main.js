$(document).ready(function(){
      $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
      });
    });

$(document).ready(function(){
      $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
          $("navbar").addClass("hide");
        } else {
          $("navbar").removeClass("hide");
        }
      });
    });
