/*==Navbar transparent to solid==*/
function checkScroll() {
  if ($(window).scrollTop() >= 300) {
    $(".navbar").addClass("solid");
  } else {
    $(".navbar").removeClass("solid");
  }
}
/*==Solid class when toggled==*/
$(document).ready(function() {
  checkScroll();
  $(window).scroll(checkScroll);
  $(".navbar-toggler").click(function() {
    if ($(window).scrollTop() <= 300) {
      $(".navbar").toggleClass("solid-toggle");
    }
  });
});
/*===LightBox===*/
$(document).ready(function() {
  lightbox.option({
    resizeDuration: 600,
    wrapAround: true,
    imageFadeDuration: 500
  });
});
/*==Close mobile menu==*/
$(document).on("click", 'a[href*="#"]', function(event) {
  event.preventDefault();
  $(".navbar-toggler").addClass("collapsed");
  $("#navbarResponsive").removeClass("show");
  setTimeout(function() {
    $("nav.navbar").removeClass("solid-toggle");
  }, 300);
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    800
  );
});

/*==Arrow down==*/
$(document).ready(function() {
  $(window).scroll(function() {
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 500);
  });
});

/*==Counter==*/
$(document).ready(function() {
  $(".counter").counterUp({
    delay: 20,
    time: 2500
  });
});

/*========== WAYPOINTS ANIMATION DELAY ==========*/
//Original Resource: https://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css
$(function() {
  // a self calling function
  function onScrollInit(items, trigger) {
    // a custom made function
    items.each(function() {
      //for every element in items run function
      var osElement = $(this), //set osElement to the current
        osAnimationClass = osElement.attr("data-animation"), //get value of attribute data-animation type
        osAnimationDelay = osElement.attr("data-delay"); //get value of attribute data-delay time

      osElement.css({
        //change css of element
        "-webkit-animation-delay": osAnimationDelay, //for safari browsers
        "-moz-animation-delay": osAnimationDelay, //for mozilla browsers
        "animation-delay": osAnimationDelay //normal
      });

      var osTrigger = trigger ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger

      osTrigger.waypoint(
        function() {
          //scroll upwards and downwards
          osElement.addClass("animated").addClass(osAnimationClass); //add animated and the data-animation class to the element.
        },
        {
          triggerOnce: true, //only once this animation should happen
          offset: "70%" // animation should happen when the element is 70% below from the top of the browser window
        }
      );
    });
  }

  onScrollInit($(".os-animation")); //function call with only items
  onScrollInit($(".staggered-animation"), $(".staggered-animation-container")); //function call with items and trigger
});
