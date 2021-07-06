"use strict";

//Event for Sticky Nav, Fixed-Whatsapp and Go-up icon

const header = document.querySelector("header");

const sectionPromotion = document.querySelector(".section--promotion");

const navbar = document.querySelector("#navbar");

const whatsapp = document.querySelector(".fixed--whatsapp");

const goUp = document.querySelector(".fixed--go--up");

const navObserver = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      navbar.classList.add("stick", "container-fluid");

      whatsapp.style.display = "flex";
      goUp.style.display = "flex";
    } else {
      navbar.classList.remove("stick", "container-fluid");
      whatsapp.style.display = "none";
      goUp.style.display = "none";
    }
  },
  { root: null, threshold: 0 }
);

navObserver.observe(header);

//Event for Promotions Sections

const promotions = Array.from(document.querySelectorAll(".promotion"));

const promoObserver = new IntersectionObserver(
  function (entries, obs) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__slideInUp");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

promotions.forEach((promotion) => {
  promoObserver.observe(promotion);
});

//Event for Products and Services

const right = Array.from(document.querySelectorAll(".right"));
const left = Array.from(document.querySelectorAll(".left"));

const productObs = new IntersectionObserver(
  function (entries, obs) {
    const [entry] = entries;
    if (entry.isIntersecting && entry.target.classList.contains("right")) {
      entry.target.classList.add("animate__animated", "animate__slideInRight");
      entry.target.style.opacity = "1";
    } else {
      entry.target.classList.add("animate__animated", "animate__slideInLeft");
      entry.target.style.opacity = "1";
    }
  },
  {
    root: null,
    threshold: 0.5,
  }
);

right.forEach((r) => {
  productObs.observe(r);
});

left.forEach((r) => {
  productObs.observe(r);
});

//Event for Contact

const contact = document.querySelector(".col--1");

const footObserver = new IntersectionObserver(
  function (entries, obs) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__slideInUp");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

footObserver.observe(contact);

//Event for Sliding title

const slide1 = document.querySelector("#sliding-1");
const slide2 = document.querySelector("#sliding-2");
const slide3 = document.querySelector("#sliding-3");
const slides = [slide1, slide2, slide3];
let num = 1;

console.log(slide1, slide2);

setInterval(function () {
  if (num === 0 || num === 1 || num === 2) {
    slides.forEach((slide) => (slide.style.display = "none"));
    slides[num].style.display = "block";
    num++;
  } else if (num > 2) {
    num = 0;
  }
}, 4000);

//Event for smooth scrolling

const promotion = document.querySelector("#promotion");
const promotionSection = document.querySelector(".promotion-title");

promotion.addEventListener("click", function () {
  promotionSection.scrollIntoView({ behavior: "smooth" });
});

const products = document.querySelector("#products");
const productsSection = document.querySelector(".products");

products.addEventListener("click", function () {
  productsSection.scrollIntoView({ behavior: "smooth" });
});

const services = document.querySelector("#services");
const servicesSection = document.querySelector(".services");

services.addEventListener("click", function () {
  servicesSection.scrollIntoView({ behavior: "smooth" });
});

const contacts = document.querySelector("#contact");
const contactsSection = document.querySelector(".contact");

contacts.addEventListener("click", function () {
  contactsSection.scrollIntoView({ behavior: "smooth" });
});

const team = document.querySelector("#team");
const teamSection = document.querySelector(".team");

team.addEventListener("click", function () {
  teamSection.scrollIntoView({ behavior: "smooth" });
});

//Event for go up button

document.addEventListener("click", function (e) {
  let goup = e.target;
  console.log(goup);
  if (
    goup.classList.contains("fixed--go--up") ||
    goup.classList.contains("fa-arrow-up")
  ) {
    header.scrollIntoView({ behavior: "smooth" });
  }
});
