function init() {
  //selektujemo sve elemente sa potrebnim className
  const slides = document.querySelectorAll(".slide");
  const numbers = document.querySelectorAll(".number");
  const pages = document.querySelectorAll(".page");
  //niz pozadina koje cemo mijenjati sa promjenom slajdova
  const backgrounds = [
    "radial-gradient(rgb(53, 9, 51), rgb(0, 0, 0))",
    "radial-gradient(rgb(65, 36, 9),rgb(0,0,0))",
    " radial-gradient(rgb(73, 26, 52), rgb(0, 0, 0))",
  ];

  //tracker
  let current = 0;
  let scrollSlide = 0;

  //klikom na svaki slajd odradi ove funkcije
  slides.forEach((slide, index) => {
    slide.addEventListener("click", function () {
      changeDots(this);
      nextSlide(index);
      promijeniBoju(index);
      scrollSlide = index;
    });
  });
  //prosledjeni parametar je u stvari element na koji je kliknut
  function changeDots(dot) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    dot.classList.add("active");
  }
  //proslijedjeni element je indeks slajda, 0,1,2 redom
  function promijeniBoju(num) {
    //ugasi active za sve elemente class='number'
    numbers.forEach((number) => {
      number.classList.remove("active");
    });
    //dodaj active za onaj element koji ima isti id kao indeks slajda na koji je kliknut
    var h3 = document.getElementById(num);

    h3.classList.add("active");
  }
  //kraj funkcije

  function nextSlide(pageNumber) {
    const nextPage = pages[pageNumber];
    const currentPage = pages[current];
    const nextLeft = nextPage.querySelector(".hero .model_left");
    const nextRight = nextPage.querySelector(".hero .model_right");
    const currentLeft = currentPage.querySelector(".hero .model_left");
    const currentRight = currentPage.querySelector(".hero .model_right");
    const nextText = nextPage.querySelector(".details");
    const portfolio = document.querySelector(".portfolio");

    //animacije
    const tl = new TimelineMax();

    tl.fromTo(currentLeft, 0.3, { y: "-10%" }, { y: "-100%" })
      .fromTo(currentRight, 0.3, { y: "10%" }, { y: "-100%" }, "-=0.2")
      .to(portfolio, 0.3, { backgroundImage: backgrounds[pageNumber] })
      .fromTo(
        currentPage,
        0.3,
        { opacity: 1, pointerEvents: "all" },
        { opacity: 0, pointerEvents: "none" }
      )
      .fromTo(
        nextPage,
        0.3,
        { opacity: 0, pointerEvents: "none" },
        { opacity: 1, pointerEvents: "all" },
        "-=0.6"
      )
      .fromTo(nextLeft, 0.3, { y: "-100%" }, { y: "-10%" }, "-=0.6")
      .fromTo(nextRight, 0.3, { y: "-100%" }, { y: "10%" }, "-=0.8")

      .fromTo(nextText, 0.3, { opacity: 0, y: 0 }, { opacity: 1, y: 0 })

      .set(nextLeft, { clearProps: "all" })
      .set(nextRight, { clearProps: "all" });

    current = pageNumber;
  }

  document.addEventListener("wheel", throttle(scrollChange, 1500));
  //promijeni tacke
  function switchDots(dotNumber) {
    const activeDot = document.querySelectorAll(".slide")[dotNumber];
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    activeDot.classList.add("active");
  }
  //promijeni broj
  function switchNumbers(sNum) {
    const activeNum = document.querySelectorAll(".number")[sNum];
    numbers.forEach((number) => {
      number.classList.remove("active");
    });
    activeNum.classList.add("active");
  }

  //prebacuj
  function scrollChange(e) {
    if (e.deltaY > 0) {
      scrollSlide += 1;
    } else {
      scrollSlide -= 1;
    }
    if (scrollSlide > 2) {
      scrollSlide = 0;
    }
    if (scrollSlide < 0) {
      scrollSlide = 2;
    }
    switchDots(scrollSlide);
    switchNumbers(scrollSlide);
    nextSlide(scrollSlide);
  }
}

//wheel function

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

init();

/*
//za navbar da se prikazuje i skriva
const menu = document.querySelector(".hamburger");
let isOpen = 0;

function handleToggle() {
  menu.addEventListener("click", function () {
    isOpen = !isOpen;
    handleIsOpen(isOpen);
  });
}

function handleIsOpen(isOpen) {
  if (isOpen) {
    document.querySelector(".content").classList.add("active");
    document.querySelector(".hamburger").classList.remove("active");
  } else {
    document.querySelector(".content").classList.remove("active");
    document.querySelector(".hamburger").classList.add("active");
  }
}

handleToggle();
*/
