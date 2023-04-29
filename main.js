const burger = document.querySelector(".nav_burger");
const nav = document.querySelector(".nav");

const greet = document.getElementById("greeting");
const prod = document.getElementById("production");
const greetText = "Welcome To Porfolio Website";
const prodText = "Created by Madi Kushkentayev";

const next = document.querySelector(".scroller_next");
const prev = document.querySelector(".scroller_prev");
const header = document.querySelector(".header");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const wrapper = document.querySelector(".wrapper");
let page = 1;

const screenH = window.screen.height;
const screenW = window.screen.width;

const menu = document.querySelectorAll(".nav_menu_item");

function greetMessage() {
    let i = 0;
    const interval = setInterval(function () {
        greet.innerHTML += greetText[i++];
        if (i == greetText.length) {
            clearInterval(interval);
            let j = 0;
            const prodinterval = setInterval(function () {
                prod.innerHTML += prodText[j++];
                if (j == prodText.length) {
                    clearInterval(prodinterval);
                }
            }, 100);
        }
    }, 100);
}

function activateBurger() {
    nav.classList.toggle("nav_active");
    burger.classList.toggle("nav_burger_active");
}

function scroll(event) {
    let transformX = -5 + event.clientX / screenW * 10;
    let transformY = 1 + event.clientY / screenH * 2;
    document.body.style.backgroundPosition = `${transformX}% ${transformY}%`;
}

function scrollNext() {
    if (page == 1) {
        wrapper.style.transform = `translateY(-33.33%)`;
        page++;
    }
    else if (page == 2) {
        wrapper.style.transform = `translateY(-66.66%)`;
        page++;
    }
}

function scrollPrev() {
    if (page == 3) {
        wrapper.style.transform = `translateY(-33.33%)`;
        page--;
    }
    else if (page == 2) {
        wrapper.style.transform = `translateY(0)`;
        page--;
    }
}

function navigate(event) {
    const value = event.target.textContent;
    if (value == "Home") {
        wrapper.style.transform = `translateY(0)`;
        page = 1;
    } else if (value == "About") {
        wrapper.style.transform = `translateY(-33.33%)`;
        page = 2;
    } else if (value == "Contact") {
        wrapper.style.transform = `translateY(-66.66%)`;
        page = 3;
    }
}

window.addEventListener("load", greetMessage);
window.addEventListener("mousemove", scroll);
burger.addEventListener("click", activateBurger);
next.addEventListener("click", scrollNext);
prev.addEventListener("click", scrollPrev);
menu.forEach(function(item) {
    item.addEventListener("click", navigate);
})

