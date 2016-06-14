$(function() {

  $("#example, body").vegas({
    slides: [{
        src: "./img/bg.jpg"
      }, {
        src: "./img/bg1.jpg"
      }, {
        src: "./img/bg2.jpg"
      }

    ],
    transition: 'zoomOut',
    transitionDuration: 10000,
    delay: 17000,
    timer: false,
  });

  $('.btn').click(function() {
    
    $('.nav').toggleClass('open');


  });

// function fierosochka() {
//   $( ".fierosochka" ).animate({
//     height: '100%'},
//      100, "linear", function() {
//        $('.fierosochka').css({
//          height: '50px',
//        });
//      });
//    }


  // fierosochka();
  function fierosochka() {
    var elem = $( ".fierosochka");
    elem.animate({height: '100%'}, 10000, function () {
        console.log(elem.css('top'));
        elem.css({top : '0'});
        console.log(elem.css('top'));
        fierosochka();
      });


  }

  fierosochka();


  window.onmousewheel = (function() {
    if (event.wheelDelta <= 20) {
      $('.inner-screen-left').addClass('inner-screen-left-active');
      $('.inner-screen-right').addClass('inner-screen-right-active');


    } else if (event.wheelDelta >= 20) {
      $('.inner-screen-left').removeClass('inner-screen-left-active');
      $('.inner-screen-right').removeClass('inner-screen-right-active');
    }
  });

});
