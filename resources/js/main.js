$(document).ready(function(){
      $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
      });
    });

var scrollUser = 0;

$(document).ready(function(){
      $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
          $(".navbar").addClass("test");
        } else {
          $(".navbar").removeClass("test");
        }
      });
    });
