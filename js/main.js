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

const projectList = document.querySelector(".project-list");
const projectStatus = document.querySelector(".project-status");
const retryButton = document.querySelector(".retry-button");

const githubUsername = "whdals006"
const githubApiUrl =
    `https://api.github.com/users/${githubUsername}/repos`;


/* =================================================
   Smooth Scroll (페이지 내 부드러운 스크롤 이동 함수)
================================================= */

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


/* =========================================================
   Scroll Dynamic Header & Scroll-Top Button Controller
   (스크롤 위치에 따른 헤더 및 맨 위로 가기 버튼 상태 제어 함수)
========================================================= */

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


/* =========================================================
   Theme Setter (다크/라이트 테마 변경 및 저장 함수)
========================================================= */

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


/* =========================================================
   Theme Getter & Loader (현재 테마 조회 및 저장된 테마 로드)
========================================================= */

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


/* =========================================================
   Event Listeners (사용자 인터랙션 및 시스템 이벤트 연결)
========================================================= */

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



/* =========================================================
   Intersection Observer (스크롤 시 화면 감지 애니메이션 제어)
========================================================= */

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



/* =========================================================
   Form Validation & UX (Contact Form 폼 유효성 검사 및 제출)
========================================================= */

const contactForm = document.querySelector(
    "#contact-form"
);

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector(
    "#message-error"
);

const formSuccess = document.querySelector(
    "#form-success"
);


const validateName = () => {
    if (nameInput.value.trim() === "") {
        nameError.textContent =
            "이름을 입력해주세요.";

        nameInput.classList.add("invalid");

        return false;
    }

    nameError.textContent = "";
    nameInput.classList.remove("invalid");

    return true;
};


const validateEmail = () => {
    const email = emailInput.value.trim();

    if (email === "") {
        emailError.textContent =
            "이메일을 입력해주세요.";

        emailInput.classList.add("invalid");

        return false;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent =
            "올바른 이메일 형식을 입력해주세요.";

        emailInput.classList.add("invalid");

        return false;
    }

    emailError.textContent = "";
    emailInput.classList.remove("invalid");

    return true;
};


const validateMessage = () => {
    if (messageInput.value.trim() === "") {
        messageError.textContent =
            "메시지를 입력해주세요.";

        messageInput.classList.add("invalid");

        return false;
    }

    messageError.textContent = "";
    messageInput.classList.remove("invalid");

    return true;
};


const clearSuccessMessage = () => {
    formSuccess.textContent = "";
};


nameInput.addEventListener(
    "input",
    validateName
);

emailInput.addEventListener(
    "input",
    validateEmail
);

messageInput.addEventListener(
    "input",
    validateMessage
);


const formInputs = [
    nameInput,
    emailInput,
    messageInput
];

formInputs.forEach((input) => {
    input.addEventListener(
        "input",
        clearSuccessMessage
    );
});


contactForm.addEventListener(
    "submit",
    (event) => {
        event.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        if (!isNameValid) {
            nameInput.focus();
            return;
        }

        if (!isEmailValid) {
            emailInput.focus();
            return;
        }

        if (!isMessageValid) {
            messageInput.focus();
            return;
        }

        formSuccess.textContent =
            "문의가 성공적으로 제출되었습니다.";

        contactForm.reset();
    }
);



/* =========================================================
   Fetch Projects (GitHub API 비동기 프로젝트 데이터 로딩)
========================================================= */

const fetchProjects = async () => {
    retryButton.style.display = "none";

    projectStatus.textContent =
        "프로젝트를 불러오는 중...";

    try {
        const response = await fetch(githubApiUrl);

        if (!response.ok) {
            throw new Error(
                `GitHub API 요청 실패: ${response.status}`
            );
        }

        const projects = await response.json();

        renderProjects(projects);

    } catch (error) {
        console.error(error);

        projectList.innerHTML = "";

        projectStatus.textContent =
            "프로젝트를 불러올 수 없습니다.";   
            
        retryButton.style.display = "block";
    }
};



/* =========================================================
   Render Projects (전달받은 프로젝트 데이터를 HTML로 그려주는 함수)
========================================================= */

const renderProjects = (projects) => {
    if (projects.length === 0) {
        projectList.innerHTML = "";
        projectStatus.textContent =
            "표시할 프로젝트가 없습니다.";
        return;
    }

    projectStatus.textContent = "";

    projectList.innerHTML = projects
        .map(
            ({
                name,
                html_url,
                description,
                stargazers_count,
                language
            }) => `
                <article>
                    <h3>${name}</h3>

                    <p>
                        ${description || "프로젝트 설명이 없습니다."}
                    </p>

                    <p>
                        ⭐ ${stargazers_count}
                    </p>

                    <p>
                        ${language || "언어 정보 없음"}
                    </p>

                    <a
                        href="${html_url}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub에서 보기
                    </a>
                </article>
            `
        )
        .join("");
};



/* =========================================================
   Retry Button Event Listener (프로젝트 불러오기 재시도)
========================================================= */

retryButton.addEventListener("click", fetchProjects);



/* =========================================================
   Initial Application State & Execution
   (웹페이지 로드 시 초기 상태 세팅 및 데이터 요청 함수 실행)
========================================================= */

loadTheme();
handleScroll();
fetchProjects();