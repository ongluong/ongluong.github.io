jQuery(function(){
    // jQuery('span.text1').css('color','rgb(16, 25, 179)');
    // jQuery('span.text2').css({'color':'rgb(179, 15, 15)','font-weight': '700'});
    // jQuery('span.text3').css({'color':'rgb(4, 56, 205)','font-weight': '700'});
    // jQuery('span.text4').css({'color':'rgb(63, 63, 63)','font-weight': '700'});
    // jQuery('span.text5').css({'color':'rgb(16, 25, 171)','font-weight': '700'});
    // jQuery('span.text6').css({'color':'rgb(201, 18, 18)','font-weight': '700'});
    // jQuery('span.text7').css({'color':'rgb(61, 29, 210)','font-weight': '700'});
    // jQuery('span.text8').css({'color':'rgb(232, 16, 16)','font-weight': '700'});
    // jQuery('span.text9').css({'color':'rgb(214, 8, 8)','font-weight': '700'});
    // jQuery('span.text10').css({'color':'rgb(36, 28, 210)','font-weight': '700'});
    // jQuery('span.text11').css({'color':'rgb(63, 63, 63)','font-weight': '700','font-style':'italic'});
   	// jQuery('span.text12').css({'color':'rgb(211, 10, 10)','text-decoration': 'underline'});
   	// jQuery('span.text13').css('color','rgb(211, 9, 9)');
   	// jQuery('span.text14').css('color','rgb(200, 26, 26)');
   	// jQuery('span.text15').css({'color':'rgb(65, 26, 186)','font-weight': '700'});
   	// jQuery('span.text16').css({'color':'rgb(195, 20, 20)','font-weight': '700'});
   	// jQuery('span.text17').css({'color':'rgb(30, 40, 217)','font-weight': '700'});
   	// jQuery('span.text18').css({'color':'rgb(212, 15, 15)','font-weight': '400'});
   	// jQuery('span.text19').css({'color':'rgb(224, 13, 13)','font-weight': '700'});
   	// jQuery('span.text20').css({'color':'rgb(39, 120, 17)','font-weight': '700'});
   	// jQuery('span.text21').css({'color':'rgb(217, 31, 31)','font-weight': '700'});
   	// jQuery('span.text22').css({'color':'rgb(33, 22, 161)','font-weight': '700'});
   	// jQuery('span.text23').css({'color':'rgb(187, 15, 15)'});
   	// jQuery('span.text24').css({'color':'rgb(204, 10, 10)'});
   	// jQuery('span.text25').css({'color':'rgb(190, 14, 14)'});
   	// jQuery('span.text26').css({'color':'rgb(211, 7, 7)','font-weight': '700'});
   	// jQuery('span.text27').css({'color':'rgb(11, 15, 183)','font-weight': '700'});
   	// jQuery('span.text28').css({'color':'rgb(7, 108, 10)','font-weight': '700'});
   	// jQuery('span.text29').css({'color':'rgb(195, 24, 24)','font-weight': '700'});
   	// jQuery('span.text30').css({'color':'rgb(186, 9, 9)','font-weight': '700'});
   	// jQuery('span.text31').css({'color':'rgb(42, 19, 211)','font-weight': '700'});
   	// jQuery('span.text32').css({'color':'rgb(8, 33, 167)','font-weight': '400'});
   	// jQuery('span.text33').css({'color':'rgb(215, 24, 24)','font-weight': '700'});
   	// jQuery('span.text34').css({'color':'rgb(33, 17, 224)','font-weight': '700'});
   	// jQuery('span.text35').css({'color':'rgb(15, 164, 57)','font-weight': '700'});
   	// jQuery('span.text36').css({'color':'rgba(15, 33, 218,0.65)','font-weight': '700'});
   	// jQuery('span.text37').css({'color':'rgb(176, 14, 14)','font-weight': '700'});
   	// jQuery('span.text38').css({'color':'rgb(31, 99, 8)','font-weight': '700'});
   	// jQuery('span.text39').css({'color':'rgb(13, 17, 173)'});
   	// jQuery('span.text40').css({'color':'rgb(17, 2, 2)','font-weight': '700'});
});


// function getTimeRemaining(endtime) {
//   var t = Date.parse(endtime) - Date.parse(new Date());
//   var seconds = Math.floor((t / 1000) % 60);
//   var minutes = Math.floor((t / 1000 / 60) % 60);
//   var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   var days = Math.floor(t / (1000 * 60 * 60 * 24));
//   return {
//     'total': t,
//     'days': days,
//     'hours': hours,
//     'minutes': minutes,
//     'seconds': seconds
//   };
// }

// function initializeClock(id, endtime) {
//   var clock = document.getElementById(id);
//   var daysSpan = clock.querySelector('.days');
//   var hoursSpan = clock.querySelector('.hours');
//   var minutesSpan = clock.querySelector('.minutes');
//   var secondsSpan = clock.querySelector('.seconds');

//   function updateClock() {
//     var t = getTimeRemaining(endtime);

//     daysSpan.innerHTML = t.days;
//     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }

//   updateClock();
//   var timeinterval = setInterval(updateClock, 1000);
// }

// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
// initializeClock('clockdiv', deadline);



$(document).ready(function () {
    $('#loi').click(function() {
    $('html, body').animate({
      scrollTop: $(".Benefits").offset().top
    }, 600)
  }),
     $('#why').click(function() {
    $('html, body').animate({
      scrollTop: $(".Why-choose-Megakin").offset().top
    }, 600)
  })
});