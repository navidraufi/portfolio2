const navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav__close"),
  navMenu = document.getElementById("nav-menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}

navLinks.forEach((n) => n.addEventListener("click", linkAction));

const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggelSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills-close";
  }

  if (itemClass === "skills__content skills-close") {
    this.parentNode.className = "skills__content skills-open";
  }
}

skillsHeader.forEach((er) => {
  er.addEventListener("click", toggelSkills);
});

const edu = document.getElementById("education"),
  work = document.getElementById("work"),
  workBtn = document.getElementById("work__btn"),
  eduBtn = document.getElementById("education__btn"),
  hiddenClass = "hidden";

function toggleWork() {
  if (work.classList.contains(hiddenClass)) {
    work.classList.remove(hiddenClass);
    edu.classList.add(hiddenClass);
    document.getElementById("work__btn").classList.add("active");
    document.getElementById("education__btn").classList.remove("active");
  }
}

function toggleEdu() {
  if (edu.classList.contains(hiddenClass)) {
    edu.classList.remove(hiddenClass);
    work.classList.add(hiddenClass);
    document.getElementById("education__btn").classList.add("active");
    document.getElementById("work__btn").classList.remove("active");
  }
}

workBtn.addEventListener("click", toggleWork);

eduBtn.addEventListener("click", toggleEdu);

const closeBtns = document.querySelectorAll(".services__modal-close"),
  screen = document.querySelectorAll(".services__modal"),
  viewBtns = document.querySelectorAll(".button--link"),
  serviceContents = document.querySelectorAll(".services__content");

let screenIsOpen = false;

function closeAll() {
  screenIsOpen = false;
  for (let i = 0; i < serviceContents.length; i++) {
    serviceContents[i].classList.remove("z__index");
  }
}

function openService(btn_clicked) {
  closeAll();
  screenIsOpen = true;
  switch (btn_clicked) {
    case "front__end-services":
      serviceContents[0].classList.add("z__index");
      break;
    case "ui__services":
      serviceContents[1].classList.add("z__index");
      break;
    case "branding__sevices":
      serviceContents[2].classList.add("z__index");
      break;
  }
}

for (let i = 0; i < viewBtns.length; i++) {
  viewBtns[i].addEventListener("click", function () {
    let btnClicked = this.classList[0];
    openService(btnClicked);
  });
}

closeBtns.forEach(function (btn) {
  btn.addEventListener("click", closeAll);
});

let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,
  loop: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

const navLink = document.querySelectorAll(".nav__link");

function removeLinks() {
  navLink.forEach((btn) => btn.classList.remove("active-link"));
}

function headerShadow() {
  const nav = document.querySelector(".header");

  scrollY >= 80
    ? nav.classList.add("scroll-header")
    : nav.classList.remove("scroll-header");
}

window.addEventListener("scroll", headerShadow);

function scrollHeader() {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollHeader);

// Dark Theme

const body = document.querySelector("body"),
  moonBtn = document.getElementById("moon-btn"),
  sunBtn = document.getElementById("sun-btn");

function darkTheme() {
  body.classList.add("dark-theme");
  sunBtn.classList.remove("hidden");
  moonBtn.classList.add("hidden");
}

function lightTheme() {
  body.classList.remove("dark-theme");
  sunBtn.classList.add("hidden");
  moonBtn.classList.remove("hidden");
}

moonBtn.addEventListener("click", darkTheme);
sunBtn.addEventListener("click", lightTheme);

const home = navLink[0],
  about = navLink[1],
  skills = navLink[2],
  services = navLink[3],
  portfolio = navLink[4],
  contact = navLink[5],
  homeY = 0,
  aboutY = 500,
  skillsY = 1240,
  servicesY = 2300,
  portfolioY = 2950,
  contactY = 4440;

function scrollListener() {
  removeLinks();
  let value = scrollY;
  let link = "active-link";

  if (value < aboutY) {
    home.classList.add(link);
  } else if (value < skillsY) {
    about.classList.add(link);
  } else if (value < servicesY) {
    skills.classList.add(link);
  } else if (value < portfolioY) {
    services.classList.add(link);
  } else if (value < contactY) {
    portfolio.classList.add(link);
  } else if (value < 5500) {
    contact.classList.add(link);
  }
}

window.addEventListener("scroll", scrollListener);
