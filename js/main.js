$(function () {
  $('.menu__btn, .menu__link').click(function () {
    $('.menu__btn, .menu__link').toggleClass('menu__btn--active'),
      $('.menu__list').toggleClass('menu__list--active');
  })

  $(".menu, .header__content, .footer").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top -77 }, 1200);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('.menu').addClass("menu--sticky");
    }
    else {
      $('.menu').removeClass("menu--sticky");
    }
  });


    var mixer = mixitup('.portfolio__content');
  });