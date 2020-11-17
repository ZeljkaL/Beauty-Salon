function initS() {
  const dots = document.querySelectorAll(".dot");
  const pages = document.querySelectorAll(".experience-box");
  const images = document.querySelectorAll(".one-fr");
  const big_image = document.querySelectorAll(".image-box");
  const photo = document.querySelectorAll(".practice img");
  const span = document.querySelectorAll(".practice span");
  const heading = document.querySelectorAll(".text h2");

  photo.forEach((photo, index) => {
    photo.addEventListener("pointerover", function () {
      changeSpan(index);
    });
  });

  function changeSpan(index) {
    span.forEach((t) => {
      t.classList.remove("active");
    });

    span[index].classList.add("active");
  }
  /*
  //animacije
  const tl = new TimelineMax({ delay: 1.2 });

  tl.fromTo(heading, 1.2, { y: "-30%", opacity: 0 }, { y: "0%", opacity: 1 });
*/
  //klikom na svaku tacku odradi ove funkcije
  dots.forEach((dot, index) => {
    dot.addEventListener("pointerover", function () {
      changeD(this);
      changeC(index);
    });
  });

  //prosledjeni parametar je u stvari element na koji je kliknut
  function changeD(dot) {
    dots.forEach((slide) => {
      slide.classList.remove("active");
    });

    dot.classList.add("active");
  }

  function changeC(box) {
    pages.forEach((page) => {
      page.classList.remove("active");
    });
    //dodaj active za onaj element koji ima isti id kao indeks slajda na koji je kliknut
    var content = document.getElementById(box);

    content.classList.add("active");
  }
  //za about section

  //klikom na svaku sliku odradi ove funkcije
  images.forEach((image, indexx) => {
    image.addEventListener("pointerover", function () {
      changeI(this);
      changeB(indexx);
    });
  });

  //prosledjeni parametar je u stvari element na koji je kliknut
  function changeI(img) {
    images.forEach((image) => {
      image.classList.remove("active");
    });

    img.classList.add("active");
  }

  function changeB(big) {
    big_image.forEach((big_img) => {
      big_img.classList.remove("active");
    });
    big = big + 10;
    //dodaj active za onaj element koji ima isti id kao indeks slajda na koji je kliknut
    var content = document.getElementById(big);

    content.classList.add("active");
  }
}

initS();
