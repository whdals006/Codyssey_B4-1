# 웹 기초 완성, 나만의 포트폴리오 구축

## 1. 프로젝트 기본 구조 만들기

### 1-1. 기본 폴더,파일 만들기

```bash
B4-1/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
├── README.md
└── .gitignore
```

### 1-2. .gitignore 작성

```bash
node_modules/
.DS_Store
.vscode/
```

* ```node_modules/```

    Node.js 기반 프로젝트(React, Vue, Express 등)에서 설치한 외부 라이브러리(패키지)들이 저장되는 폴더

* ```.DS_Store```

    macOS의 Finder(파일 탐색기)가 특정 폴더를 열 때 자동으로 생성하는 시스템 숨김 파일

* ```.vscode/```

    isual Studio Code에서 해당 프로젝트를 열었을 때 적용되는 개인 에디터 설정 폴더


## 2. HTML 시맨틱 구조 만들기

### 2-1. 시맨틱 구조

```
body
│
├── header
│   └── nav
│
├── main
│   ├── section#hero
│   ├── section#about
│   ├── section#skills
│   ├── section#projects
│   └── section#contact
│
└── footer
```

```
<body>
    <header>                    # 사이트 상단 영역
        <nav>...</nav>          # 사이트 내 이동 메뉴
    </header>

    <main>                      # 페이지의 핵심 콘텐츠
        <section>...</section>  # 독립적인 영역
        <section>...</section>
        <section>...</section>
        <section>...</section>
        <section>...</section>
    </main>

    <footer>                    # 저작권,SNS 등의 하단 정보
        ...
    </footer>
</body>
```


## 3. CSS 기본 디자인

### 3-1. CSS Variables

* CSS 변수를 만들어서 사이트 전체의 디자인 값을 한곳에서 관린할 수 있다.

```
:root
 │
 ├── primary color
 ├── background
 ├── text
 ├── spacing
 └── border-radius
 ```

### 3-2. Reset

### 3-3. Common

* 각 section의 콘텐츠가 화면 전체로 퍼지지 않도록 container를 만든다.

### 3-4. Header / Navigation

* Header 꾸미기
* Flexbox 사용

### 3-5. 메뉴 버튼과 테마 버튼

* 현재 데스크톱에서는 햄버거 버튼을 숨긴다.

### 3-6. Section 공통 스타일

### 3-7. Hero

* Hero는 포트폴리오의 첫인사이기 때문에 중앙 정렬
* clamp() : 화면 크기에 따라 제목 크기를 적절하게 변경해주는 함수

### 3-8. About

* box-shadow 사용

### 3-9. Skills

* hover 사용
* trasition 사용
* box-shadow 사용

### 2-10. Projects

* Grid 사용 (auto-fit, minmax로 반응형)
* 핵심 코드

    ```css
    grid-template-columns:
    repeat(auto-fit, minmax(250px, 1fr));
    ```

### 2-11. Contact Form


### 2-12. Footer


### 2-13. Tablet/Desktop 기본 레이아웃



## 4. 반응형 웹 + 모바일 네비게이션

### 4-1. 


## 5. JavaScript DOM & 이벤트

### 5-1. HTML에 scroll Top 버튼 추가

## 6. 다크 모드 + 상태 유지 + 스크롤 애니메이션

### 6-1. html

```html
<button
    type="button"
    class="theme-toggle"
    aria-label="다크 모드 전환"
>
    🌙
</button>
```

### 6-2. css 변수에 추가

```css
[data-theme="dark"] {
    --color-background: #111827;
    --color-text: #f9fafb;
    --color-text-secondary: #d1d5db;
    --color-primary: #60a5fa;
}
```

### 6-3. main.js 에서 DOM 선택 부분 추가

```javascript
const themeToggle = document.querySelector(".theme-toggle");
```


### 6-4. 스크롤 애니메이션

* About, Skills, Projects, Contact 에만 적용