const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

const navLinks = document.querySelectorAll(".nav-menu a");

const heroLinks = document.querySelectorAll(
    '#hero a[href^="#"]'
);

const scrollTopButton = document.querySelector(".scroll-top");
const header = document.querySelector("header");

const themeToggle = document.querySelector(".theme-toggle");

const animatedElements = document.querySelectorAll(
    ".animate-on-scroll"
);


// =========================
// Smooth Scroll
// =========================

const scrollToSection = (event) => {
    event.preventDefault();

    const targetId =
        event.currentTarget.getAttribute("href");

    const targetSection =
        document.querySelector(targetId);

    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    }
};


// =========================
// Scroll
// =========================

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


// =========================
// Theme (다크 모드를 변경하는 함수)
// =========================

const setTheme = (theme) => {
    document.documentElement.setAttribute(
        "data-theme",
        theme
    );

    localStorage.setItem("theme", theme);

    if (theme === "dark") {
        themeToggle.textContent = "☀️";
        themeToggle.setAttribute(
            "aria-label",
            "라이트 모드로 전환"
        );
    } else {
        themeToggle.textContent = "🌙";
        themeToggle.setAttribute(
            "aria-label",
            "다크 모드로 전환"
        );
    }
};


// =========================
// 현재 theme를 확인하는 함수
// =========================

const getCurrentTheme = () => {
    return document.documentElement.getAttribute(
        "data-theme"
    );
};

// 저장된 theme 불러오기
const loadTheme = () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        setTheme(savedTheme);
    }
};


// =========================
// Events
// =========================

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        scrollToSection(event);
        navMenu.classList.remove("active");
    });
});


heroLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});


// theme 토글 구현
themeToggle.addEventListener("click", () => {
    const currentTheme = getCurrentTheme();

    if (currentTheme === "dark") {
        setTheme("light");
    } else {
        setTheme("dark");
    }
});


window.addEventListener("scroll", handleScroll);


scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// =========================
// Intersection Observer
// =========================

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.2
    }
);


animatedElements.forEach((element) => {
    observer.observe(element);
});


// =========================
// Initial State
// =========================

loadTheme();
handleScroll();