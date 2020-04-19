$(document).ready(function(){
  //smooth scroll and pageup
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
  //scroll
  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
  //Mask for phone's input
  $('input[name=phone]').mask("+48 999-999-999");

  //form's validate
  $('#consultation-form').validate({
    rules: {
      name: 'required',
      phone: 'required',
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Пожалуйста введите свое имя"
      },
      phone: {
        required: "Пожалуйста введите свой номер телефона"
      },
      email: {
        required: "Пожалуйста введите свою почту",
        email: "Неправильно введен email"
      }
    }
  });

  $('#questions-form').validate({
    rules: {
      name: 'required',
      phone: 'required',
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Пожалуйста введите свое имя"
      },
      phone: {
        required: "Пожалуйста введите свой номер телефона"
      },
      email: {
        required: "Пожалуйста введите свою почту",
        email: "Неправильно введен email"
      },
      message: {
        required: "Пожалуйста введите свой вопрос"
      }
    }
  });
  new WOW().init();

});