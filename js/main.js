// DOM 요소
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

const navLinks = document.querySelectorAll(".nav-menu a");

const heroLinks = document.querySelectorAll(
    '#hero a[href^="#"]'
);

const scrollTopButton = document.querySelector(".scroll-top");
const header = document.querySelector("header");


const scrollToSection = (event) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    }
};


const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY >= 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    if (scrollY >= 300) {
        scrollTopButton.classList.add("visible");
    } else {
        scrollTopButton.classList.remove("visible");
    }
};



// 햄버거 메뉴 클릭 시 메뉴가 열리고 닫히는 토글
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// 모바일 메뉴 링크 클릭 시 메뉴 닫기
navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        scrollToSection(event);
        navMenu.classList.remove("active");
    });
});


// 부드러운 스크롤
heroLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});


// 스크롤 이벤트 구현
window.addEventListener("scroll", handleScroll);

handleScroll();


// Scroll Top 클릭하면 맨 위로 이동
scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

