const nav = document.querySelector("nav");
const whyUs = document.getElementsByClassName("why_us-left");
const WhyUsImage = document.getElementsByClassName("why_us-imgcontainer");
const cards = document.getElementsByClassName("cards");
const ourHeader = document.getElementsByClassName("our_story-header");
const ourParagraph = document.getElementsByClassName("our_story-paragraph");
const ourVideo = document.getElementsByClassName("our_story-video");
const pricingText = document.getElementsByClassName("pricing_plans-text");
const plans = document.getElementsByClassName("plans");
const testimonialText = document.getElementsByClassName("testimonial-text");
const testimonials = document.getElementsByClassName("testimonials");

window.onscroll = function () {
    if (window.pageYOffset > 100) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
    if (window.pageYOffset > 500) {
        whyUs[0].classList.add("fullopacity");
        WhyUsImage[0].classList.add("fullopacity");
    } else {
        whyUs[0].classList.remove("fullopacity");
        WhyUsImage[0].classList.remove("fullopacity");
    }
    if (window.pageYOffset > 1250) {
        cards[0].classList.add("fullopacity");
    } else {
        cards[0].classList.remove("fullopacity");
    }
    if (window.pageYOffset > 2200) {
        ourHeader[0].classList.add("fullopacity");
        ourParagraph[0].classList.add("fullopacity");
        ourVideo[0].classList.add("fullopacity");
    } else {
        ourHeader[0].classList.remove("fullopacity");
        ourParagraph[0].classList.remove("fullopacity");
        ourVideo[0].classList.remove("fullopacity");
    }
    if (window.pageYOffset > 2700) {
        pricingText[0].classList.add("fullopacity");
        plans[0].classList.add("fullopacity");
    } else {
        pricingText[0].classList.remove("fullopacity");
        plans[0].classList.remove("fullopacity");
    }
    if (window.pageYOffset > 3400) {
        testimonialText[0].classList.add("fullopacity");
        testimonials[0].classList.add("fullopacity");
    } else {
        testimonialText[0].classList.remove("fullopacity");
        testimonials[0].classList.remove("fullopacity");
    }
};

const navButton = document.querySelector("button[aria-expanded]");
function toggleNav({ target }) {
    const expanded = target.getAttribute('aria-expanded') === 'true' || false;
    navButton.setAttribute('aria-expanded', !expanded);
}
navButton.addEventListener('click', toggleNav);
