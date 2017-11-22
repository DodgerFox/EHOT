window.onload = function () {
  pagesChanges()
  loadElems()
}

//slider for first-screen
var swiperWelcome = new Swiper('.welcome-slider', {
        pagination: {
          el: '.welcome-slider__dots',
          type: 'bullets',
          clickable: true
        },
        paginationClickable: true,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 500,
        navigation: {
          nextEl: '.welcome-slider__pagination .pagination__right',
          prevEl: '.welcome-slider__pagination .pagination__left',
        }

    });

var buttonRight = $('.nav-item--right'),
    sectionOne = $('.welcome'),
    buttonRight = $('.nav-item--right');

function slideRight() {
  $(buttonRight).click(function () {
    $(sectionOne).addClass('.welcome--close');
  })  
}

function pagesChanges() {
  var buttonWorks = $('.header__nav-item--works'),
      buttonAbout = $('.header__nav-item--about'),
      headerLogo = $('.header__logo'),
      header = $('.header')
      sectionWorks = $('.works'),
      sectionAbout = $('.about'),
      sectionWelcome = $('.welcome'),
      headerItems = $('.header__nav-item');

  $(buttonWorks).click(function () {
    console.log('click!')
    $(sectionWorks).addClass('works--open')
    $(sectionWelcome).addClass('welcome--left')
    $(headerItems).removeClass('header__nav-item--active')
    $(buttonWorks).removeClass('header__nav-item--active')
    $(buttonWorks).addClass('header__nav-item--active')
    setTimeout(function () {
      $(header).addClass('header--open')
    }, 850)
  })
  
  $(buttonAbout).click(function () {
    console.log('click!')
    $(sectionAbout).addClass('about--open')
    $(sectionWelcome).addClass('welcome--right')
    $(headerItems).removeClass('header__nav-item--active')
    $(this).addClass('header__nav-item--active')
  })

  $(headerLogo).click(function () {
    console.log('click!')
    $(sectionWorks).removeClass('works--open')
    $(sectionAbout).removeClass('about--open')
    $(sectionWelcome).removeClass('welcome--left').removeClass('welcome--right')
    $(headerItems).removeClass('header__nav-item--active')
  })

}




function showWelcome() {
  var welcomeNav = $('.welcome__nav');
    setTimeout(function () {
      $(welcomeNav).css("display", "flex").hide().fadeIn();
    }, 1000)
}

function showFirstScreen() {
  var welcomeScreen = $('.welcome');

  setTimeout(function () {
      $(welcomeScreen).fadeIn();
    }, 500)  
}

function showWelcomeText() {
  var welcomeText = $('.language__last');

  setTimeout(function () {
    $(welcomeText).fadeIn();
  }, 1000)
}


function loadElems() {
  var langSection = $('.language'),
      langBanner = $('.language__banner'),
      langItems = $('.language__item'),
      langFirst = $('.language__first'),
      buttonOpen = $('.language__button-text');
      clickeds = 0;

  setTimeout(function () {
    $(langBanner).fadeIn();
  }, 1000)

  setTimeout(function () {
    $(langItems[0]).fadeIn();
    setTimeout(function () {
      $(langItems[1]).fadeIn();
      setTimeout(function () {
        $(langItems[2]).fadeIn();
        setTimeout(function () {
          $(langItems[3]).fadeIn();
        }, 100)
      }, 100)
    }, 100)
  }, 3100)

  $(langItems).click(function () {
    if ($(this).hasClass('wrong-lang')) {
      $(langBanner).fadeOut()
      clickeds++;
      
      setTimeout(function () {
        if (clickeds == 1) { 
          $(langBanner).html("Sorry, man. I dont know this language :)")
        }
        if (clickeds == 2) { 
          $(langBanner).html("Easy, easy, man. Think about it!")
        }
        if (clickeds == 3) { 
          $(langBanner).html("Realy, man. Choose any language")
        }


        setTimeout(function () {
          $(langBanner).fadeIn()
        }, 200)
      }, 400)

    }else{ 
      $(langFirst).fadeOut()
      setTimeout(function () {
        showWelcomeText()
      }, 800)
    }
  })

  $(buttonOpen).click(function () {
    console.log('click!')
    $(langSection).fadeOut()
    setTimeout(function () {
       showWelcome()
       showFirstScreen()
    }, 400)
  })


}