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

// 1. 클릭 이벤트를 받아 해당 섹션으로 부드럽게 스크롤해 주는 화살표 함수 선언
const scrollToSection = (event) => {
    // 2. <a> 태그의 기본 동작(클릭 시 주소창 URL 뒤에 #id가 붙으며 기동 없이 툭 이동하는 현상)을 방지
    event.preventDefault();

    // 3. 현재 클릭된 <a> 태그의 href 속성 값(예: "#about", "#projects" 등)을 가져와 targetId 변수에 저장
    const targetId =
        event.currentTarget.getAttribute("href");

    // 4. 가져온 href 값(예: "#about")을 CSS 선택자로 활용하여 실제 이동할 HTML 섹션 요소를 DOM에서 탐색
    const targetSection =
        document.querySelector(targetId);

    // 5. 이동 대상 섹션 요소가 화면(DOM)에 실제로 존재하는지 확인 (예외 처리)
    if (targetSection) {
        // 6. 대상 섹션 위치로 화면 스크롤을 부드럽게(smooth) 애니메이션을 주며 이동
        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    }
};


/* =========================================================
   Scroll Dynamic Header & Scroll-Top Button Controller
   (스크롤 위치에 따른 헤더 및 맨 위로 가기 버튼 상태 제어 함수)
========================================================= */

// 1. 브라우저 스크롤 이벤트 발생 시 실행될 화살표 함수 handleScroll 선언
const handleScroll = () => {
    // 2. 현재 웹페이지가 세로 방향으로 몇 픽셀(px) 스크롤되었는지 값을 읽어와 scrollY 변수에 저장
    const scrollY = window.scrollY;

    // 3. 스크롤 위치가 60px 이상 내려갔는지 조건 검사
    if (scrollY >= 60) {
        // 4. 60px 이상이면 <header> 태그의 클래스 목록에 "scrolled"를 추가 (그림자 효과 생성)
        header.classList.add("scrolled");
    // 5. 스크롤 위치가 60px 미만인 경우 (맨 위로 다시 돌아왔을 때)
    } else {
        // 6. <header> 태그에서 "scrolled" 클래스를 제거 (그림자 제거하여 원래 상태로 복원)
        header.classList.remove("scrolled");
    }

    // 7. 스크롤 위치가 300px 이상 내려갔는지 조건 검사
    if (scrollY >= 300) {
        // 8. 300px 이상 내려왔으면 맨 위로 가기 버튼(scrollTopButton)에 "visible" 클래스를 추가하여 화면에 표시
        scrollTopButton.classList.add("visible");
    // 9. 스크롤 위치가 300px 미만인 경우
    } else {
        // 10. 맨 위로 가기 버튼에서 "visible" 클래스를 제거하여 화면에서 다시 부드럽게 숨김
        scrollTopButton.classList.remove("visible");
    }
};


/* =========================================================
   Theme Setter (다크/라이트 테마 변경 및 저장 함수)
========================================================= */

// 1. 변경할 테마 문자열("dark" 또는 "light")을 매개변수 theme으로 전달받는 함수 선언
const setTheme = (theme) => {
    // 2. HTML 최상위 요소(<html> 태그)의 "data-theme" 속성값을 전달받은 theme 값으로 변경 (CSS 변수 일괄 전환)
    document.documentElement.setAttribute(
        "data-theme",
        theme
    );
    // 3. 브라우저 저장소(localStorage)에 현재 설정된 테마 정보를 저장하여 새로고침 후에도 유지되도록 함
    localStorage.setItem("theme", theme);

    // 4. 적용할 테마가 "dark"인지 조건 검사
    if (theme === "dark") {
        // 5. 다크 모드일 때 버튼 아이콘을 해 모양("☀️")으로 변경하여 라이트 모드로 바꿀 수 있음을 표시
        themeToggle.textContent = "☀️";
        // 6. 스크린 리더 등 웹 접근성을 위해 버튼의 읽기용 라벨(aria-label)을 "라이트 모드로 전환"으로 설정
        themeToggle.setAttribute(
            "aria-label",
            "라이트 모드로 전환"
        );
    // 7. 적용할 테마가 다크 모드가 아닌 경우 (라이트 모드인 경우)
    } else {
        // 8. 라이트 모드일 때 버튼 아이콘을 달 모양("🌙")으로 변경하여 다크 모드로 바꿀 수 있음을 표시
        themeToggle.textContent = "🌙";
        // 9. 스크린 리더를 위해 버튼의 읽기용 라벨(aria-label)을 "다크 모드로 전환"으로 설정
        themeToggle.setAttribute(
            "aria-label",
            "다크 모드로 전환"
        );
    }
};


/* =========================================================
   Theme Getter & Loader (현재 테마 조회 및 저장된 테마 로드)
========================================================= */

// 1. 현재 HTML에 적용된 테마("dark" 또는 "light") 값을 읽어와 반환하는 화살표 함수 선언
const getCurrentTheme = () => {
    // 2. <html> 태그의 "data-theme" 속성 현재 값을 추출하여 함수를 호출한 곳으로 반환(return)
    return document.documentElement.getAttribute(
        "data-theme"
    );
};

// 3. 브라우저 저장소(localStorage)에 저장된 이전 테마를 확인하고 불러오는 초기화 함수 선언
const loadTheme = () => {
    // 4. localStorage에 "theme"이라는 키 이름으로 저장되어 있던 값("dark" 또는 "light" 등)을 가져와 savedTheme 변수에 저장
    const savedTheme = localStorage.getItem("theme");
    // 5. 이전에 저장해 둔 테마 값(savedTheme)이 존재하는지 확인 (방문 이력이 있는지 검사)
    if (savedTheme) {
        // 6. 저장된 값이 존재하면 해당 테마 값을 전달하여 앞서 만든 setTheme() 함수를 실행 (웹사이트 테마 복원)
        setTheme(savedTheme);
    }
};


/* =========================================================
   Event Listeners (사용자 인터랙션 및 시스템 이벤트 연결)
========================================================= */

// 1. 모바일 메뉴 토글 버튼(menuToggle)을 클릭하면 모바일 메뉴 영역(navMenu)의 "active" 클래스를 토글(켜고 끎)
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// 2. 내비게이션 메뉴에 속한 각 링크(navLinks) 요소를 하나씩 순회
navLinks.forEach((link) => {
    // 3. 각 네비게이션 링크 클릭 시 실행할 이벤트 함수 등록
    link.addEventListener("click", (event) => {
        // 4. 앞서 만든 scrollToSection 함수를 호출하여 클릭한 해당 섹션으로 부드럽게 스크롤 이동
        scrollToSection(event);
        // 5. 메뉴 링크를 클릭한 후 모바일 메뉴 창이 자동으로 닫히도록 "active" 클래스를 제거
        navMenu.classList.remove("active");
    });
});


// 6. 히어로 섹션 내부에 있는 내부 이동 링크(heroLinks) 요소들을 하나씩 순회
heroLinks.forEach((link) => {
    // 7. 각 히어로 링크 클릭 시 scrollToSection 함수가 실행되도록 직접 전달하여 연결
    link.addEventListener("click", scrollToSection);
});


// 8. 테마 토글 버튼(themeToggle)을 클릭하면 실행될 이벤트 리스너 등록
themeToggle.addEventListener("click", () => {
    // 9. 현재 HTML에 설정되어 있는 테마 값("dark" 또는 "light")을 getCurrentTheme() 함수로 가져옴
    const currentTheme = getCurrentTheme();

    // 10. 현재 테마가 "dark"인지 조건 확인
    if (currentTheme === "dark") {
        // 11. 다크 모드인 경우 setTheme("light")를 호출하여 라이트 모드로 전환
        setTheme("light");
    // 12. 현재 테마가 다크 모드가 아닌 경우 (라이트 모드인 경우)
    } else {
        // 13. setTheme("dark")를 호출하여 다크 모드로 전환
        setTheme("dark");
    }
});


// 14. 사용자가 웹 브라우저 전체(window)에서 스크롤을 할 때마다 handleScroll 함수를 실행하여 헤더 및 버튼 상태 갱신
window.addEventListener("scroll", handleScroll);


// 15. 맨 위로 가기 버튼(scrollTopButton)을 클릭하면 최상단 스크롤 동작 실행
scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



/* =========================================================
   Intersection Observer (스크롤 시 화면 감지 애니메이션 제어)
========================================================= */

// 1. 브라우저 화면(뷰포트)에 요소가 들어왔는지 관찰(감지)할 IntersectionObserver 객체를 생성하고 생성자 함수 호출
const observer = new IntersectionObserver(
    // 2. 관찰 중인 요소들의 상태가 변할 때(화면에 나타나거나 나갈 때) 실행될 콜백 함수 선언 (관찰 대상들의 정보 배열인 entries를 인자로 받음)
    (entries) => {
        // 3. 관찰 중인 여러 개 요소의 정보(entry)를 하나씩 순회하며 처리
        entries.forEach((entry) => {
            // 4. 현재 순회 중인 요소(entry)가 화면(뷰포트) 안으로 실제로 들어왔는지(교차했는지) 조건 검사
            if (entry.isIntersecting) {
                // 5. 화면에 들어온 실제 HTML 태그(entry.target)의 클래스 목록에 "visible"을 추가하여 CSS 애니메이션 실행
                entry.target.classList.add("visible");
            }
        });
    },
    // 6. 관찰자의 옵션(설정값)을 지정하는 객체 전달
    {
        // 7. 관찰 대상 요소의 20%(0.2) 이상이 화면에 보이기 시작할 때 콜백 함수를 실행하도록 감지 기준 설정
        threshold: 0.2
    }
);

// 8. 관찰 대상인 애니메이션 요소 목록(animatedElements)을 하나씩 순회
animatedElements.forEach((element) => {
    // 9. 위에서 만든 감지기(observer)에게 해당 HTML 요소(element)를 눈여겨보라고 감지 등록(observe)
    observer.observe(element);
});



/* =========================================================
   Form Validation & UX (Contact Form 폼 유효성 검사 및 제출)
========================================================= */

// 1. Contact Form 전송용 <form> 태그 요소 탐색
const contactForm = document.querySelector(
    "#contact-form"
);

// 2. 폼 입력 필드(이름, 이메일, 메시지) DOM 요소 탐색
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

// 3. 각 입력창 하단에 에러 문구를 표시할 DOM 요소 탐색
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector(
    "#message-error"
);

// 4. 폼 제출 성공 시 완료 메시지를 표시할 DOM 요소 탐색
const formSuccess = document.querySelector(
    "#form-success"
);


// 5. 이름 입력 필드의 유효성 검사 함수 선언
const validateName = () => {
    // 6. 이름 입력값의 앞뒤 공백을 제거(.trim())하여 빈 문자열인지 검사
    if (nameInput.value.trim() === "") {
        // 7. 빈 값일 경우 에러 메시지 텍스트 출력
        nameError.textContent =
            "이름을 입력해주세요.";

        // 8. 입력창 스타일 변경을 위한 "invalid" 클래스 추가 (예: 빨간 테두리)
        nameInput.classList.add("invalid");

        // 9. 검사 실패를 의미하는 false 반환
        return false;
    }

    // 10. 입력을 정상적으로 한 경우 에러 메시지 초기화
    nameError.textContent = "";
    // 11. 입력창에서 "invalid" 클래스 제거
    nameInput.classList.remove("invalid");

    // 12. 검사 통과를 의미하는 true 반환
    return true;
};


// 13. 이메일 입력 필드의 유효성 검사 함수 선언
const validateEmail = () => {
    // 14. 이메일 입력값의 앞뒤 공백을 제거하여 email 변수에 저장
    const email = emailInput.value.trim();

    // 15. 이메일 입력값이 빈 문자열인지 검사
    if (email === "") {
        // 16. 빈 값일 경우 에러 메시지 출력
        emailError.textContent =
            "이메일을 입력해주세요.";

        // 17. 입력창에 "invalid" 클래스 추가
        emailInput.classList.add("invalid");

        // 18. 검사 실패(false) 반환
        return false;
    }

    // 19. 이메일 형식을 검증하기 위한 정규표현식(RegEx) 패턴 생성
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 20. 입력값이 이메일 정규표현식 패턴과 일치하지 않는지(.test()) 검사
    if (!emailPattern.test(email)) {
        // 21. 형식에 맞지 않는 경우 에러 메시지 출력
        emailError.textContent =
            "올바른 이메일 형식을 입력해주세요.";

        // 22. 입력창에 "invalid" 클래스 추가
        emailInput.classList.add("invalid");

        // 23. 검사 실패(false) 반환
        return false;
    }

    // 24. 모든 검사 통과 시 에러 메시지 초기화
    emailError.textContent = "";
    // 25. 입력창에서 "invalid" 클래스 제거
    emailInput.classList.remove("invalid");

    // 26. 검사 통과(true) 반환
    return true;
};


// 27. 메시지 입력 필드의 유효성 검사 함수 선언
const validateMessage = () => {
    // 28. 메시지 입력값의 앞뒤 공백을 제거하여 빈 문자열인지 검사
    if (messageInput.value.trim() === "") {
        // 29. 빈 값일 경우 에러 메시지 출력
        messageError.textContent =
            "메시지를 입력해주세요.";

        // 30. 입력창에 "invalid" 클래스 추가
        messageInput.classList.add("invalid");

        // 31. 검사 실패(false) 반환
        return false;
    }

    // 32. 검사 통과 시 에러 메시지 초기화
    messageError.textContent = "";
    // 33. 입력창에서 "invalid" 클래스 제거
    messageInput.classList.remove("invalid");

    // 34. 검사 통과(true) 반환
    return true;
};


// 35. 성공 안내 메시지를 지워주는 초기화 함수 선언
const clearSuccessMessage = () => {
    formSuccess.textContent = "";
};


// 36. 이름 입력창에 키보드 입력(input)이 일어날 때마다 실시간으로 유효성 검사 함수 실행
nameInput.addEventListener(
    "input",
    validateName
);

// 37. 이메일 입력창에 키보드 입력(input)이 일어날 때마다 실시간으로 유효성 검사 함수 실행
emailInput.addEventListener(
    "input",
    validateEmail
);

// 38. 메시지 입력창에 키보드 입력(input)이 일어날 때마다 실시간으로 유효성 검사 함수 실행
messageInput.addEventListener(
    "input",
    validateMessage
);


// 39. 폼 내 모든 입력창(DOM 요소)을 배열로 묶어 생성
const formInputs = [
    nameInput,
    emailInput,
    messageInput
];

// 40. 입력창 배열을 순회하며 사용자가 타이핑을 시작하면 성공 메시지를 없애는 이벤트 등록
formInputs.forEach((input) => {
    input.addEventListener(
        "input",
        clearSuccessMessage
    );
});


// 41. Contact Form 전송(submit) 이벤트 리스너 연결
contactForm.addEventListener(
    "submit",
    (event) => {
        // 42. 폼 제출 시 페이지가 새로고침되는 브라우저의 기본 동작을 차단
        event.preventDefault();

        // 43. 3개 입력 필드의 유효성 검사를 각각 실행하여 결과를 변수(true/false)에 저장
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        // 44. 이름 입력이 유효하지 않은 경우
        if (!isNameValid) {
            // 45. 커서를 이름 입력창으로 포커스 이동시킨 후 제출 동작을 여기서 중단
            nameInput.focus();
            return;
        }

        // 46. 이메일 입력이 유효하지 않은 경우
        if (!isEmailValid) {
            // 47. 커서를 이메일 입력창으로 포커스 이동시킨 후 제출 동작을 여기서 중단
            emailInput.focus();
            return;
        }

        // 48. 메시지 입력이 유효하지 않은 경우
        if (!isMessageValid) {
            // 49. 커서를 메시지 입력창으로 포커스 이동시킨 후 제출 동작을 여기서 중단
            messageInput.focus();
            return;
        }

        // 50. 모든 검사를 통과하면 성공 문구 출력
        formSuccess.textContent =
            "문의가 성공적으로 제출되었습니다.";

        // 51. 폼 안의 모든 입력 필드 값을 빈 값으로 리셋
        contactForm.reset();
    }
);



/* =========================================================
   Fetch Projects (GitHub API 비동기 프로젝트 데이터 로딩)
========================================================= */

// 1. GitHub API로부터 프로젝트 목록을 불러오는 비동기(async) 화살표 함수 선언
const fetchProjects = async () => {
    // 2. 재시도 버튼(retryButton)을 화면에 보이지 않도록 숨김
    retryButton.style.display = "none";

    // 3. 상태 표시 텍스트 영역에 데이터 로딩 중임을 알려주는 문구 출력
    projectStatus.textContent =
        "프로젝트를 불러오는 중...";

    // 4. API 통신 중 예외/에러가 발생할 가능성이 있는 코드를 감싸는 try 블록 시작
    try {
        // 5. fetch()를 이용해 API URL로 네트워크 요청을 보내고, 응답을 받기까지 대기(await)하여 response 변수에 저장
        const response = await fetch(githubApiUrl);

        // 6. HTTP 응답 상태가 정상(200~299)이 아닌 경우(예: 404, 500 에러) 조건 확인
        if (!response.ok) {
            // 7. 의도적으로 에러 객체를 생성하여 강제로 throw 발생 (catch 블록으로 즉시 이동)
            throw new Error(
                `GitHub API 요청 실패: ${response.status}`
            );
        }

        // 8. 응답(response) 본문 데이터를 JSON 객체(배열) 형태로 파싱(변환) 완료될 때까지 대기(await)
        const projects = await response.json();

        // 9. 파싱된 프로젝트 데이터 배열을 화면 그리기(렌더링) 함수인 renderProjects에 전달하여 호출
        renderProjects(projects);

    // 10. try 블록 내부 또는 네트워크 실패 등에서 발생한 에러를 잡아내는 catch 블록
    } catch (error) {
        // 11. 발생한 에러 객체의 상세 내용을 개발자 도구 콘솔창에 기록
        console.error(error);

        // 12. 기존에 표시되어 있던 프로젝트 목록 영역의 HTML을 깨끗하게 비움
        projectList.innerHTML = "";

        // 13. 상태 표시 텍스트 영역에 불러오기 실패 안내 문구 출력
        projectStatus.textContent =
            "프로젝트를 불러올 수 없습니다.";   
            
        // 14. 사용자가 다시 통신을 시도할 수 있도록 숨겨두었던 재시도 버튼을 다시 화면에 노출("block")
        retryButton.style.display = "block";
    }
};




/* =========================================================
   Render Projects (전달받은 프로젝트 데이터를 HTML로 그려주는 함수)
========================================================= */

// 1. 프로젝트 배열(projects)을 인자로 받아 화면에 UI를 생성하는 renderProjects 화살표 함수 선언
const renderProjects = (projects) => {
    // 2. 전달받은 프로젝트 배열의 길이가 0인지 (불러온 프로젝트가 비어있는지) 검사
    if (projects.length === 0) {
        // 3. 기존에 남아있을 수 있는 프로젝트 리스트 영역의 HTML 요소를 깨끗하게 지움
        projectList.innerHTML = "";
        // 4. 상태 표시 텍스트 영역에 결과가 없음을 알리는 안내 메시지 출력
        projectStatus.textContent =
            "표시할 프로젝트가 없습니다.";
        // 5. 조건에 해당할 경우 아래의 렌더링 로직을 실행하지 않고 함수를 여기서 바로 종료(return)
        return;
    }

    // 6. 프로젝트 데이터가 존재하는 경우, 로딩 중이거나 에러 상태였던 안내 문구를 비워줌
    projectStatus.textContent = "";

    // 7. projects 배열의 각 항목을 HTML 문자열로 변환(map)한 뒤 하나로 합쳐(join) DOM 영역에 한 번에 삽입
    projectList.innerHTML = projects
        .map(
            // 8. 매개변수 위치에서 객체 구조 분해 할당(Destructuring)을 사용해 필요 속성만 바로 추출
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
        // 14. .map()이 반환한 HTML 문자열 배열([ 'article1', 'article2' ])을 하나의 긴 문자열로 결합
        .join("");
};



/* =========================================================
   Retry Button Event Listener (프로젝트 불러오기 재시도)
========================================================= */

// 재시도 버튼(retryButton)을 클릭하면 fetchProjects 함수를 실행하여 GitHub API 데이터를 다시 요청함
retryButton.addEventListener("click", fetchProjects);



/* =========================================================
   Initial Application State & Execution
   (웹페이지 로드 시 초기 상태 세팅 및 데이터 요청 함수 실행)
========================================================= */

// 1. 브라우저 저장소(localStorage)에 저장되어 있던 이전 테마("dark" 또는 "light")를 확인하여 웹사이트에 바로 적용
loadTheme();
// 2. 초기 스크롤 위치를 즉시 계산하여 헤더 디자인(.scrolled) 및 맨 위로 가기 버튼의 노출 상태를 세팅
handleScroll();
// 3. 페이지 최초 접속 시 GitHub API 요청을 시작하여 프로젝트 목록 데이터를 비동기로 불러와 렌더링
fetchProjects();