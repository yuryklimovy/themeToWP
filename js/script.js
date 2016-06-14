$(function() {

  $("body").vegas({
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



  var navOpenStatus = false;
  var timeStamp = -10000;
  $('.menu-button-outer').click(function(e) {
    if ((e.timeStamp - timeStamp) > 1000){
      timeStamp = e.timeStamp;
      $('.nav').toggleClass('open');
      $('.btn__secondLine').toggleClass('btn__secondLine-open');
      var menuItem = $('.menu__item');
      var i = 0;
      setTimeout(function run() {
        $(menuItem[i]).toggleClass('menu__item-open');
        i++;

        if(i < menuItem.length){
          setTimeout(run, 200);
        }
      }, 200);
      if(!navOpenStatus){
        navOpenStatus = true;

        $('.btn__firstLine').animate({top: '50%'}, 500, function() {
          $('.btn__firstLine').css({transform: 'rotate(45deg)'});
        });

      $('.btn__thirdLine').animate({top: '50%'}, 500, function() {
          $('.btn__thirdLine').css({transform: 'rotate(-45deg)'});
        });
      }else{
        navOpenStatus = false;
        setTimeout(function functionName() {
            $('.btn__firstLine').animate({top: '20%'}, 500);
            $('.btn__thirdLine').animate({top: '80%'}, 500);
        }, 500);
        $('.btn__firstLine').css({transform: 'rotate(0deg)'});
        $('.btn__thirdLine').css({transform: 'rotate(0deg)'});
    }
}


});

  function fierosochka() {
    var elem = $( ".fierosochka");
    elem.animate({height: '100%'}, 10000, function () {
        elem.css({top : '0'});
        fierosochka();
      });


  }

  fierosochka();

  function addNews() {
    $('.inner-screen-right').addClass('inner-screen-right-active');
    $('.inner-screen-left').addClass('inner-screen-left-active');

    $(".bg-wrapper").vegas({
      slides: [{
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
  }
  window.onmousewheel = (function() {
    if (event.wheelDelta <= 20) {
      addNews();
    } else if (event.wheelDelta >= 20) {
      $('.inner-screen-left').removeClass('inner-screen-left-active');
      $('.inner-screen-right').removeClass('inner-screen-right-active');
    }
  });

  $("#news").click(addNews);
});
