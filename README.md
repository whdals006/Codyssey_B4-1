# B4-1 웹 기초 완성, 나만의 포트폴리오 구축

---

## 1. 프로젝트 소개

웹 개발 학습 과정에서 제작한 개인 포트폴리오 웹사이트입니다.

Hero, About, Skills, Projects, Contact 섹션으로 구성되어 있으며,
사용자의 이벤트에 따라 화면이 변경되는 인터랙티브 기능을 구현했습니다.

특히 GitHub API를 사용하여 실제 GitHub 저장소 정보를
Projects 섹션에 동적으로 표시하도록 구현했습니다.

---

## 2. 프로젝트 구조

```tree
B4-1/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── profile.jpg
└── README.md
```

---

## 3. GitHub Pages 배포 url

https://whdals006.github.io/Codyssey_B4-1/

---

## 4. 학습 목표

- Semantic HTML
- CSS Flexbox
- CSS Grid
- 반응형 웹 디자인
- DOM 선택 및 조작
- EventListener
- 이벤트 처리
- 화살표 함수
- 템플릿 리터럴
- 배열 map()
- fetch()
- async/await
- try/catch
- GitHub API
- Intersection Observer
- localStorage
- Form Validation
- GitHub Pages 배포

---

## 5. 주요 기능

- 반응형 포트폴리오 웹사이트
- 모바일 햄버거 메뉴
- 부드러운 섹션 스크롤
- Scroll Top 버튼
- 스크롤에 따른 Navigation 스타일 변경
- 다크 모드
- 다크 모드 설정 localStorage 저장
- 스크롤 애니메이션
- Contact 폼 입력값 검증
- 이메일 형식 검증
- GitHub API를 이용한 프로젝트 목록 조회
- GitHub API 로딩 / 성공 / 에러 / 빈 상태 처리
- API 요청 실패 시 다시 시도 기능

---

## 6. 개발 환경

- HTML5
- CSS3
- JavaScript (ES6+)

---

## 7. 주요 구현 내용

### 1. Semantic HTML

`header`, `nav`, `main`, `section`, `article`, `footer` 등의
시맨틱 태그를 사용하여 페이지 구조를 구성했습니다.

다음과 같은 섹션으로 구성되어 있습니다.

- Hero
- About
- Skills
- Projects
- Contact
- Footer

```shell
body
│
├── header                  ; 사이트 상단 영역
│   └── nav                 ; 사이트 내 이동 메뉴
│
├── main                    ; 페이지의 핵심 콘텐츠
│   ├── section#hero        ; 독립적인 영역 (페이지에서 처음 보이는 영역)
│   ├── section#about       ; 독립적인 영역
│   ├── section#skills      ; 독립적인 영역
│   ├── section#projects    ; 독립적인 영역
│   └── section#contact     ; 독립적인 영역
│   
└── footer                  ; 저작권, SNS 등의 하단 정보
```


---

### 2. 반응형 디자인

모바일 퍼스트 방식으로 CSS를 작성했습니다.

다음 브레이크포인트를 기준으로 레이아웃을 변경합니다.

- Mobile
    - 햄버거 메뉴 표시
    - Navigation 메뉴 숨김
    - Skills 영역 2열 Grid

- Tablet: `768px`
    - Navigation 메뉴 표시
    - About 영역 Grid 레이아웃 적용
    - Skills 영역 3열 Grid

- Desktop: `1024px`
    - Hero 영역 확대
    - 넓은 화면에 맞춘 레이아웃 적용
    - Skills 영역 5열 Grid

Projects 영역은 CSS Grid의 `auto-fit`과 `minmax()`를 사용하여
화면 크기에 따라 카드의 개수가 자동으로 조정되도록 구현했습니다.

---

### 3. 햄버거 메뉴

모바일 환경에서 메뉴 버튼을 클릭하면
`classList.toggle("active")`를 이용하여 Navigation 메뉴를 표시하거나 숨깁니다.

메뉴 링크를 클릭하면 메뉴가 자동으로 닫히도록 구현했습니다.

---

### 4. 부드러운 스크롤

Navigation 및 Hero 영역의 링크를 클릭하면
`scrollIntoView()`를 사용하여 해당 섹션으로 부드럽게 이동합니다.

---

### 5. Scroll Top

페이지를 300px 이상 스크롤하면 Scroll Top 버튼이 나타납니다.

버튼을 클릭하면 `window.scrollTo()`와 `behavior: "smooth"`를 사용하여
페이지의 최상단으로 부드럽게 이동합니다.

---

### 6. Navigation 스타일 변경

페이지를 60px 이상 스크롤하면 Header에 `scrolled` 클래스를 추가합니다.

이를 통해 스크롤된 상태에서 Navigation에 그림자가 표시되도록 구현했습니다.

---

### 7. Dark Mode

Dark Mode 버튼을 클릭하면 현재 테마를 확인한 후
`data-theme` 속성을 변경하여 다크 모드와 라이트 모드를 전환합니다.

CSS 변수의 값을 변경하는 방식으로 전체 페이지의 색상을 변경했습니다.

또한 선택한 테마를 `localStorage`에 저장하여
페이지를 새로고침해도 이전 테마가 유지되도록 구현했습니다.

---

### 8. Scroll Animation

`IntersectionObserver`를 사용하여 요소가 화면에 들어왔을 때
`visible` 클래스를 추가합니다.

이를 통해 각 섹션이 화면에 나타날 때
opacity와 transform을 이용한 애니메이션이 실행됩니다.

Intersection Observer threshold는 `0.2`로 설정했습니다.

---

### 9. Contact Form Validation

Contact 폼에서 다음 항목을 검증합니다.

- 이름 필수 입력
- 이메일 필수 입력
- 이메일 형식 검사
- 메시지 필수 입력

잘못된 입력이 들어오면 해당 입력 필드에 오류 메시지를 표시하고
`invalid` 클래스를 추가합니다.

모든 입력값이 올바른 경우 성공 메시지를 표시합니다.

폼 제출 시에는 `event.preventDefault()`를 사용하여
브라우저의 기본 제출 동작을 방지했습니다.

---

## 8. GitHub API

GitHub REST API를 사용하여 사용자의 Repository 목록을 가져옵니다.

API 요청은 `fetch()`와 `async/await`를 사용하여 처리했습니다.

```text
https://api.github.com/users/{GitHub ID}/repos
```

API 상태에 따라 다음과 같이 UI를 변경합니다.

### Loading

    ```
    프로젝트를 불러오는 중...
    ```

### Success

    GitHub Repository 데이터를 받아 프로젝트 카드를 동적으로 생성합니다.

### Error

    ```
    프로젝트를 불러올 수 없습니다.
    ```
    에러 발생 시 '다시 시도' 버튼을 표시합니다.

### Empty

    Repository가 존재하지 않는 경우.

    ```
    표시할 프로젝트가 없습니다.
    ```


## 9. 상태 관리 흐름

사용자 이벤트 → 상태 변경 → 화면 업데이트

### Dark Mode

```
Dark Mode 버튼 클릭
        ↓
theme 상태 확인 및 변경
        ↓
data-theme 변경
        ↓
CSS 변수 변경
        ↓
화면 테마 변경
```

### GitHub API

```
API 호출
   ↓
Loading 상태
   ↓
Success / Error / Empty
   ↓
Projects UI 변경
```

### Contact Form

```
사용자 입력
   ↓
validation 수행
   ↓
입력 상태 확인
   ↓
에러 메시지 표시 또는 제거
```

### Navigation

```
햄버거 버튼 클릭
       ↓
active 클래스 변경
       ↓
메뉴 표시 / 숨김
```