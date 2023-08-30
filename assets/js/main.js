
document.addEventListener('DOMContentLoaded', function () {
  const arrowLeft = document.querySelector('.custom-splide__arrow-prev');
  const arrowRight = document.querySelector('.custom-splide__arrow-next');
  let slideNum = document.querySelector('.steps');
  var splide = new Splide('.splide', {
    type: 'slide',
    autoplay: true,
    perPage: 1,
    gap: '10px',
    perMove: 1,
    autoWidth: true,
    pagination: false,
    breakpoints: {
      575: {
        autoWidth: false,
        perPage: 1,
        arrows: false,
        // focus: 'center',
      },

      390: {
        autoWidth: false,
        perPage: 1,
        arrows: false,
        focus: 'center',
      },
    },
  }).mount();

  const renderIndex = () => {
    slideNum.innerText = `${splide.index + 1}/${splide.length}`;
  }

  const renderIndexBack = () => {
    slideNum.innerText = `${splide.index + 1}/${splide.length}`;
  }

  const goToSlide = target => e => {
    splide.go(target);
    renderIndex();
  }

  const goBackSlide = target => e => {
    splide.go(target);
    renderIndexBack();

  }

  arrowRight.addEventListener('click', goToSlide('>'));
  arrowLeft.addEventListener('click', goBackSlide('<'));

  splide.on('moved', function () {
    renderIndex();
    renderIndexBack();

  });


  splide.on('moved', function () {

    const inverted = [true, false][splide.index];
    const invertedOutside = [true, false][splide.index];
    const invertedmob = [true, false][splide.index];

    ["h1"].forEach((selector) => {

      const el = document.querySelectorAll(selector)[splide.index];
      el.classList[!inverted ? "add" : "remove"]("inverted");
    });

    [ ".custom-splide__arrows", ".burger-desctop"].forEach((selector2) => {
      const el2 = document.querySelector(selector2);
      el2.classList[!invertedOutside ? "add" : "remove"]("inverted");
    });

    if ( window.screen.width > 1250) {
      const el6 = document.querySelector('.nav-menu__items');
      el6.classList[!invertedOutside ? "add" : "remove"]("inverted");
    }


    if ( window.screen.width < 1250) {
      // ["burger-mobile"].forEach((selector3) => {logo
        const el3 = document.querySelector('.burger-mobile');
        el3.classList[!invertedmob ? "add" : "remove"]("inverted");
        const el4 = document.querySelector('.logo');
        el4.classList[invertedmob ? "add" : "remove"]("inverted");
        const el5 = document.querySelector('.custom-splide__arrows');
        el5.classList.add("inverted");
    }



  });

  const el5 = document.querySelector('.custom-splide__arrows');
  el5.classList.add("inverted");


});

  class IntervalCarousel {
    constructor(wrapper, {
      slot = ".stages-technologies__items",
      direction = 1,
      interval = 6000,
      pauseInterval = null,
      userEvent = "click",
      activeClass = "active",
    } = {}) {
      this.wrapper = document.querySelector(wrapper);
      this.slotSelector = slot;
      this.slots = this.wrapper.querySelectorAll(slot);
      this.count = this.slots.length;
      this.indexAttr = "carousel-id";
      this.setIndex();
      this.userEvent = userEvent;
      this.listenUser();
      this.direction = direction;
      this.interval = interval;
      this.pauseInterval = pauseInterval || interval;
      this.activeClass = activeClass;
    }
  
    setIndex() {
      this.slots.forEach((slot, i) => slot.setAttribute(this.indexAttr, i));
    }
  
    listenUser() {
      if (this.userEvent) {
        this.slots.forEach(slot => slot.addEventListener(this.userEvent, this.handleActive));
      }
    }
  
    handleActive = (e) => {
      this.pauseCarousel();
      this.active = e.target.closest(this.slotSelector);
      this.setActive();
    }
  
    setActive() {
      this.slots.forEach(slot => {
        const active = slot === this.active;
        slot.classList[active ? "add" : "remove"](this.activeClass);
      })
    }
  
    rotate = () => {
      let i = 0;
      if (this.active) {
        i = Number(this.active.getAttribute(this.indexAttr))
          + this.direction + this.count;  // non-negative
        i %= this.count;  // i = i % this.count (modulo operator)
      }
      this.active = this.slots[i];
      this.setActive();
    }
  
    startAutoRotate = () => {
      this.rotator = setInterval(this.rotate, this.interval);
    }
  
    stopAutoRotate() {
      if (this.rotator) clearInterval(this.rotator);
    }
  
    pauseCarousel() {
      this.stopAutoRotate();
      if (this.pause) clearTimeout(this.pause);
      this.pause = setTimeout(this.startAutoRotate, this.pauseInterval);
    }
  
  }
  
  window.onload = () => {
    const carousel = new IntervalCarousel("#interval-carousel", {
    });
    carousel.startAutoRotate();
  }






if ( window.screen.width > 1250) {
  onePageScroll(".main", {
    sectionContainer: ".section",
    easing: "ease",
    animationTime: 1000,
    pagination: true,
    updateURL: false,
    keyboard: true,
    beforeMove: null,
    afterMove: null,
    loop: false,
    responsiveFallback: false
    });
}


function mobMenu() {
  let btn = document.querySelector('.burger-mobile');
  let menu = document.querySelector('.nav-menu__items');
  let closeMenu = document.querySelector('.close-menu__mobile');

  btn.addEventListener('click', () => {
    menu.classList.add('active')
  })

  closeMenu.addEventListener('click', () => {
    menu.classList.remove('active')
  })
}

mobMenu()
