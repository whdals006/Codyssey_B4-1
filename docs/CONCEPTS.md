# 미션 수행에 필요한 개념

## 1. HTML (HyperText Markup Language)

### HTML이란?

* Hypertext : 서로 링크로 연결된 문서
* markup : 표시하다

* 데이터를 어디에 배치할지 구조를 정의하는 '표시용 언어'
* 웹브라우저를 통해 표시되는 웹페이지의 콘텐츠를 정의하기 위해 사용하는 언어

### 렌더링 

* 정의 : HTML 코드가 웹브라우저를 통해 해석되고 표현되는 과정

### 태그(tag)

* 정의 : HTML 코드에서 콘텐츠를 정의하는 형식

* 단일 태그 : 시작(`<>`)과 끝(`</>`)을 구분할 필요가 없는 태그

* 속성 : 태그에 부가적인 기능을 부여하는 것 (선택사항)

    ```html
    <태그명 속성명="속성값">
    </태그명>
    ```

### 요소 (element) 

* 정의 : 태그와 컨테츠를 모두 합칫 것을 하나의 요소라고 한다.

    * 여는 태그(Opening Tag)
    * 내용(Content)
    * 닫는 태그(Clsing Tag)

* (예시) `<p>안녕하세요</p>` 가 하나의 요소이다.

### 주석 

* 쓰는 방법 : `<!--` 와 `-->` 사이에 주석 내용을 적는다.

```html
<!-- 주석 내용 -->
```

### HTML의 기본 구조

```html
<!DOCTYPE html>                 ; 문서 유형을 지정하는 단일 태그
<html>                          ; html 문서의 시작
<head>                          ; 웹 브라우저 화면에는 안보이지만, 웹 브라우저가 알아야 할 정보
    <meta charset="UTF-8">      ; 문자 인코딩 단일 태그
    <title>문서의 제목</title>    ; 문서의 제목. 브라우저 탭에 표시되는 이름
</head>
<body>                          ; 실제 웹페이지에 표시되는 내용
    실제 웹페이지에 표시할 내용
</body>
</html>                         ; html 문서의 끝
```

### 여러가지 태그들

| 태그 | 기능 | 추가 정보 |
| :--- | :--- | :--- |
| `<p>` | 문장 |
| `<h1>` | 제목 | 뒤에 숫자가 작을수록 크다 |
| `<hr>` | 수평선 |
| `<br>` | 엔터 |
| `&nbsp;` | 스페이스바 |

| 태그 | 기능 | 추가 정보 |
| :--- | :--- | :--- |
| `<strong`> | 굵게 | 감싸고 있는 콘텐츠를 굵게 표시 |
| `<em>` | 이탤릭체 |
| `<mark>` | 형관펜 표시 | 

### 태그의 구분

* 블록(block) 레벨 요소 : 자기가 속한 영역의 **너비(공간)를 모두 차지**하여 블록을 형성
    * (예시) `<p>`, `<h1>`

* 인라인(inline) 요소 : 자기에게 **필요한 만큼의 공간만 차지**
    * (예시) `<strong>`, `<em>`, `<mark>`

### 이미지를 보여주는 태그

* 기본 형태

    ```html
    <img src="표시할 이미지파일" alt="이미지설명" width="너비값" height="높이값">
    ```

* 여러가지 속성값

    | 속성 |     | 의미 |
    | :--- | :--- | :--- |
    | `src` | (source) | 표시할 이미지의 위치정보와 파일명을 입력받는 속성 |
    | `alt` | (alternative) | 이미지 로딩에 실패한 경우 이미지 대신에 표시되는 텍스트를 입력받는 속성 |
    | `width` |   | 너비값 (px단위) |
    | `height` |  | 높이값 (px단위) |

### 컨테이너 태그

* 정의 : 콘텐츠나 레이아웃에 아무런 영향을 주지 않고, 단지 다른 요소 여럿을 묶어 관리하기 편하게 만드는 역할을 하는 태그

* 컨텐츠 내용을 구분하거나, 공통적인 스타일을 적용할 때 사용

* 컨테이너 역할을 담당하는 태그

    * `<div></div>` : (division) 블록 레벨 컨테이너
    * `<span></span>` : 인라인 컨테이너

### 전역 속성 (Global Atributes)

* 정의 : 모든 HTML 태그에서 공통으로 사용할 수 있는 속성

* 대표적인 전역 속성들

    | 속성 | 의미 |
    | :--- | :--- |
    | `id` | 요소에 **고유한 이름을 부여**하는 식별자 역할 속성 |
    | `class` | 요소를 **그룹 별로 묶을** 수 있는 식별자 역할 속성 |
    | `style` | 요소에 적용할 **CSS 스타일**을 선언하는 속성 |
    | `title` | 요소의 **추가 정보를 제공**하는 텍스트 속성 <br> 사용자에게 툴팁 제공 |

### \<a> 태그로 링크 만들기

* **a 태그** 와 **href 속성**을 기본으로 사용

* a 는 Anchor(닻)을 뜻한다.

* 구조

    ```html
    <a href="링크주소"> 링크로 만들 텍스트 </a>
    ```

* \<a> 태그에 사용하는 속성

    | 속성 | 의미 |     |
    | :--- | :--- | :--- |
    | `href` | (Hypertext Reference) | ① 웹주소 `href="https://..."` <br> ② 전화걸기 `href="tel:010-0000-0000"` <br> ③ 이메일 보내기 `href="mailto:abc@naver.com"`| 
    | `target` |  | ① 링크를 현재 탭에서 열기 `target="_self"` <br> ② 링크를 새 탭에서 열기 `target="_black"` |
        

### 목록 표시하기

* 목록 : 연관있는 항목(item)들을 나열한 것

    * 순서 없는 목록(Unordered List) : `<ul></ul>` 태그 사용
    * 순서 있는 목록(Ordered List) : `<ol></ol>` 태그 사용

* `<li>` 태그 : (list) 목록에 들어가는 항목 하나 하나를 표현할 때 사용하는 태그
    
* 요약

    | 태그 | 의미 | 기능 |
    | :--- | :--- | :--- |
    | `<ul></ul>` | (Unordered List) | 순서 없는 목록 만들기 |
    | `<ol></ol>` | (Ordered List) | 순서 있는 목록 만들기 |
    | `<li></li>` | (list) | 목록에 들어가는 항목 하나하나 표현 |
    

### \<input> 태그로 입력 요소 만들기

* `<input>` 태그 : 사용자로부터 값을 입력받을 수 있는 대화형 필드를 나타낸다.
    * 인라인 요소
    * 단일 태그
    * 여러가지 속성
        | 속성 | 기능 | 속성값 |
        | :--- | :--- | :--- |
        | `type` | 어떤식으로 입력할지 지정 <br> default값은 "text" | "text" <br> "button" <br> "color" <br> "range" <br> "date" |
        | `name` | 입력 항목에 대한 이름을 지정하는 식별자 |

* 특정 `type` 속성을 쓸 때 같이 쓰는 속성들

    * 1. `type="text"` 일 때

            - **maxlength** : 최대 문자 개수 제한
            - **placeholder** : 사용자가 입력하기 전 나타나는 텍스트

    * 2. `type="button"` 일 때

            - **value** : 버튼에 메시지 입력하기

    * 3. `type="range"` 일 때

            - **max** : 최대 숫자
            - **min** : 최소 숫자
            - **step** : 한칸씩 이동할 숫자



### \<select> 태그로 입력 요소 만들기

* `<select>` 태그 : 다수의 옵션을 포함할 수 있는 선택 메뉴를 만드는 태그

    * name 속성 : select 태그의 식별자를 지정
    * multiple 속성 : 여러개의 옵션을 선택 가능

* `<option>` 태그 : \<select> 태그 안에서 여러개의 옵션을 만드는 태그

    * value 속성 : 실제로 처리될 값을 나타낸다
    * selected 속성 : default 값으로 만들어준다

* 예시

    ```html
    <select name="cafe">
        <option value="starbucks">스타벅스</option>
        <option value="coffeebean">커피빈</option>
        <option value="ediya">이디야</option>
    </select>
    ```

### \<textarea> 태그로 입력 요소 만들기

* `<textarea>` 태그 : 여러 줄의 일반 텍스트를 입력할 수 있는 태그

    * name 속성
    * rows 속성 : 행의 길이 (몇 줄 쓸 수 있는지)
    * cols 속성 : 열의 길이 (글의 가로길이)


### 양식을 만들어주는 \<form> 태그

* `<form>` 태그 : 사용자가 입력한 데이터(입력값)을 서버로 보내기 위해 사용하는 태그
    * action 속성 : 입력값을 전송할 서버의 url
    * method 속성 : 클라이언트가 입력한 데이터를 어떤 식으로 전송할지
        * "GET" : 서버에 요청을 보내어 응답을 받아낸다 (서버로부터 정보를 '가져오겠다'는 성격의 요청)
        * "POST" : 서버에 요청을 보내어 서버가 작업을 수행한다 (서버의 정보를 '조작하겠다'는 성격의 요청)

* `<form>` 태그는 입력 요소(input, select, textarea 등)를 감싸며, 입력 값을 서버 측으로 제출할 수 있다.

* form의 입력값을 제출하기 위해 \<input> 태그의 type 속성으로 `submit`을 사용.

* 예시

    ```html
    <form>
        <input type="text" placeholder="아이디">
        <br>
        <input type="text" placeholder="비밀번호>
        <br>
        <input type="submit" value="로그인">
    </form>
    ```

### \<meta> 태그

* `<meta>` 태그 : HTML 문서에 대한 메타데이터(정보)를 정의한다.

* 메타데이터(Metadata) : 데이터에 대한 데이터. 즉 데이터에 대한 정보 및 설정값

* \<meta> 태그는 항상 \<head> 태그의 안에 들어간다.

* \<meta> 태그를 사용하는 이유?

    : 웹페이지에 대한 정보를 제공하므로, 검색엔진이 페이지를 검색할 때 참고할 수 있고, 검색 결과에도 반영할 수 있다.

* \<meta> 태그가 제공하는 메타데이터의 유형 및 속성

    * `charset` : (character set) 문자 인코딩에 대한 요약 정보를 기입하는 속성

        ```html
        <meta charset="utf-8">
        ```
    * `http-equiv` : (equivalent) 콘텐츠 속성 정보에 대한 http 헤더를 제공

        ```html
        <!-- IE 브라우저의 최신 버전의 엔진을 사용하라는 뜻 -->
        <meta http-equiv="x-ua-compatible" content="IE=edge">

        <!-- 10초마다 페이지 새로고침하라는 뜻 -->
        <meta http-equiv="refresh" content="10">
        ```

    * `name` : name 속성을 **이름**으로, content 속성을 **값**으로 하여 문서 정보를 이름+값 쌍의 형태로 제공할 때 사용

        ```html
        <!-- 문서 제작자 -->
        <meta name="author" content="유노코딩">

        <!-- 페이지에 대한 요약. 브라우저 즐겨찾기 페이지의 기본 설명 값 -->
        <meta name="description" content="페이지에 대한 짧고 명확한 요약">

        <!-- 페이지의 콘텐츠와 관련된, 쉼표로 구분한 키워드 목록 -->
        <meta name="keywords" content="예를 들면, 강아지, 고양이, 등등">
        ```

    * `content` : 메타데이터의 구체적인 내용을 기입하는 속성


### 뷰포트 (viewport)

* viewport : 현재 화면에 보여지고 있는 영역을 의미한다.

* 기기 마다 viewport가 다르기 때문에 발생하는 배율 문제에 대응하기 위해 `<meta>` 태그에서 `name`속성을 통해 viewport 관련 설정을 추가할 수 있다.

    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- viewport의 너비를 단말기 너비에 맞추고, 초기 배율을 1로 한다 -->
    ```




## 2. CSS (Cascading Style Sheets)

### CSS 정의

* 정의 : 디자인 규칙을 적어두는 '스타일 지정 언어'

    * cascading : 계단식
    * style : 멋을 내다
    * sheets : 종이 한 장

    -> 계단식으로 스타일을 정의하는 문서

### CSS 기본 문법

* 코드 구조

    ```css
    선택자{
        속성명: 속성값;
    }
    ```

    - 선택자 : 어떤 요소에 스타일을 적용 할지에 대한 정보
    - 중괄호({}) : 선택한 요소에 적용할 스타일을 정의하는 영역
    - 속성명 : 어떤 스타일을 정의하고 싶은지에 대한 정보 (색상, 크기 등)
    - 속성값 : 어떻게 정의하고 싶은지에 대한 정보

* 예시

    ```css
    p{
        color: red;
    }
    ```

    - 선택장 : \<p> 태그에 스타일을 적용하겠다.
    - 중괄호 : 이 안에 \<p>태그에 대한 스타일을 정의하겠다.
    - 속성명 : color를 정의하겠다.
    - 속성값 : red로 정의하겠다.

### 주석

```css
/* 주석내용 */
```

### HTML 문서에 CSS 문서를 적용하는 방법

1. 인라인 스타일 : index.html 파일에서 태그의 속성값으로 스타일을 정의

    * 예시

        ```html
        <p style="color: blue;">
            글자를 파랗게 만들어줘
        </p>
        ```

2. 스타일 태그 : html 파일의 \<head> 태그 안에 \<style></style> 태그를 추가하여 그 안에 css코드를 작성

    * 예시

        ```html
        <style>
            /* <style> 태그 안에는 css 코드를 작성해야 한다 */
            p{
                color: red;
            }
        </style>
        ```

3. 문서 간의 연결 : style.css 문서를 따로 작성하여 HTML 문서와 연결하기

    * html 문서의 \<head> 태그 안에 적는 \<link> 태그

        ```html
        <link rel="stylesheet" href="./style.css">
        ```

        * `href` 속성 : 연결하고자 하는 외부 소스의 url을 기술하는 속성
        * `rel` 속성 : 현재 문서(html)와 외부 소스의 연관 관계를 기술하는 속성

### 선택자의 종류

1. 기본 선택자

    - **전체 선택자** : `*`를 사용해서 문서 내 모든 요소를 선택한다.

        * 예시 

            ```css
            *{
                color: blue;
            }

            /* html 문서 내 모든 요소의 글자색을 파란색으로 지정 */
            ```

    - **태그 선택자** : 주어진 이름을 가진 요소를 선택한다.

        * 예시

            ```css
            p{
                color: blue;
            }

            /* html 문서 내 모든 p 태그 요소의 글자색을 파란색으로 지정 */
            ```

    - **클래스 선택자** : `.`를 사용해서 주어진 class 속성값을 가진 요소를 선택한다.

        * 예시

            ```css
            .text{
                color: blue;
            }

            /* html 문서 내 class가 "text"인 모든 요소의 글자색을 파란색으로 지정 */
            ```

    - **아이디 선택자** : `#`을 사용해서 주어진 id 속성값을 가진 요소를 선택한다.

        * 예시

            ```css
            #topic{
                color: blue;
            }

            /* html 문서 내 id가 "topic"인 요소의 글자색을 파란색으로 지정 */
            ```

2. 그룹 선택자

    * 다양한 유형의 요소를 한꺼번에 선택하고자 할 때 사용.
    * `쉼표(,)`를 사용해 선택자를 그룹화 한다.

        * 예시

            ```css
            h1, p, div{
                color: blue;
            }

            /* 문서 내 모든 h1, p , div 태그 요소의 글자색을 파란색으로 지정*/
            ```

3. 특성 선택자

    * 주어진 속성의 존재 여부나 그 값에 따라 요소를 선택한다
    * `대괄호([])`를 사용해 선택한다.

        * 예시

            ```css
            /* 클래스 속성을 가지고 있는 요소를 선택하기 */
            [class]{ color: red; }

            /* 클래스가 "item"인 요소를 선택하기 */
            [class="item"]{ color: red; }

            /* 클래스 값에 "it"가 포함되는 요소를 선택하기 */
            [class *= "it"]{ color: red; }

            /* 클래스 값이 "it"로 시작하는 요소를 선택하기 */
            [class ^= "it"]{ color: red; }

            /* 클래스 값이 "it"로 끝나는 요소를 선택하기 */
            [class $= "it"]{ color: red; }
            ```


4. 결합 선택자

    * 두 개 이상의 선택자를 결합시켜 결합된 조건을 만족하는 요소를 선택한다.

    * 종류

        * 자손 결합자 : 두 개의 선택자 중 첫 번째 선택자 요소의 자손을 선택

            ```css
            /* div 요소 안에 위치하는 모든 p 요소를 선택 */
            div p{ color: white; }

            /* div 요소의 바로 아래에 위치하는 모든 p 요소를 선택 */
            div > p{ color: white; }
            ```

        * 형제 결합자 : 두 개의 선택자 중 첫 번째 선택자 요소의 형제를 선택

            ```css
            /* h1 요소의 뒤에 오는 형제 중 모든 p 요소를 선택 */
            h1 ~ p{ color: red; }

            /* h1 요소의 바로 뒤에 오는 형제 p 요소를 선택 */
            h1 + p{ color: red; }
            ```

5. 의사 클래스 (pseudo-class)

    * 의사클래스(가상클래스)는 **선택자에 추가하는 키워드**로, 요소가 어떤 특정한 상태가 되었을 때 요소를 선택하겠다는 의미

    * 구조

        ```css
        선택자:의사클래스{ 속성명: 속성값; }
        ```

    * 의사 클래스의 종류

        | 의사클래스 | 의미 |
        | :--- | :--- |
        | hover | 마우스 포인터가 요소에 올라가 있다 |
        | active | 사용자가 요소를 활성화했다 |
        | focus | 요소가 포커스를 받고 있다 |
        | disabled | 비활성 상태의 요소이다 |
        | nth-child() | 형제 사이에서의 순서에 따라 요소를 선택한다 <br> 괄호() 안에 몇번째 형제에 적용할지 숫자를 적는다 |

    * 예시

        ```css
        /* h1 요소에 마우스 커서가 올라오면 글자를 빨간색으로 하겠다 */
        h1:hover{ color: red; }
        ```

6. 의사 요소 (pseudo-elements)

    * 의사요소는 **선택자에 추가하는 키워드**로, 이를 이용하면 선택한 요소의 특정 부분에 대한 스타일을 정의할 수 있다

    * 구조

        ```css
        선택자::의사요소{ 속성명: 속성값; }
        ```

    * 의사 요소의 종류

        | 의사요소 | 의미 |
        | :--- | :--- |
        | after | 요소의 앞에 의사 요소를 생성 및 추가한다 |
        | before | 요소의 뒤에 의사 요소를 생성 및 추가한다 |
        | first-line | 블록 레벨 요소의 첫 번째 줄에 스타일을 적용한다 |
        | marker | 목록 기호의 스타일을 적용한다 |
        | placeholer | 입력 요소의 placeholer 스타일을 적용한다 |

    * 예시

        ```css
        /* li요소의 첫번째 글자만 크기를 20px로 하겠다 */
        li::first-letter{ font-size: 20px; }
        ```



### 텍스트 관련 속성

- font-family : 글꼴을 정의

    * 여러 개의 글꼴을 연달아 기입하여 우선 순위 지정 가능

    * 예시 

        ```css
        *{
            font-family: 굴림체, 고딕체;
        }

        /* 굴림체 글꼴이 1순위, 지원 안되면 고딕체를 지정 */
        ```

- font-size : 글자 크기를 정의

    * 여러가지 단위들

        | 단위 |    | 의미 |
        | :--- | :--- | :--- |
        | px | Pixel | 모니터 상의 화소 하나 크기에 대응하는 절대적인 크기 |
        | rem | Root EM | <html> 태그의 font-size에 대응하는 상대적인 크기 |
        | em | EM | 부모태그(상위태그)의 font-size에 대응하는 상대적인 크기 |

    * 예시

        ```css
        p{ font-size: 16px; }
        /* 16px의 절대적 크기 */

        html{ font-size: 18px; }
        p{ font-size: 2rem; }
        /* <html> 태그에 지정된 사이즈의 2배 */

        p{ font-size: 1.5em; }
        /* 상위 태그 사이즈의 1.5배 */
        ```

- text-align : 블록 내에서 텍스트의 정렬 방식을 정의

    * 여러가지 속성값

        | 속성값 | 의미 |
        | :--- | :--- |
        | left / right | 왼쪽 또는 오른쪽 정렬 |
        | center | 가운데 정렬 |
        | justify | 양끝 정렬 |

    * 예시

        ```css
        p{ text-align: right; }
        ```

- color : 글자 색상을 정의

    * 여러가지 속성값

        | 속성값 유형 | 방법 | 예시 | 
        | :--- | :--- | :--- |
        | 키워드 | 미리 정의된 색상별 키워드를 사용 | red |
        | RGB 색상 코드 | # + 여섯자리 16진수 값 형태로 지정 | #FF0000 |
        | RGB 함수 | Red, Green, Blue 의 수준을 각각 정의해 지정 | rgb(100%, 0%, 0%) |

    * 예시

        ```css
        span { color: red; }
        span { color: #FF0000; }
        span { color: rgb(100%, 0%, 0%); }
        ```

### display 속성

* display 속성 : 요소를 `블록`과 ``인라인 요소` 중 어느 쪽으로 처리할지를 정의

* 여러가지 속성값

    | 속성값 | 의미 |
    | :--- | :--- |
    | inline | 인라인으로 처리한다 |
    | block | 블록 레벨로 처리한다 |
    | inline-block | 인라인으로 배치하되, 블록 레벨 요소의 속성을 추가할 수 있도록 처리한다 |
    | none | 표시하지 않는다 |

* 예시

    ```css
    /* 블록 레벨 요소인 div 요소를 인라인으로 처리하고 싶다면 */
    div{ display: inline; }

    /* 인라인 요소인 a 요소를 블록 레벨로 처리하고 싶다면 */
    a{ display: block; }
    ```

### border 속성

* border 속성 : 요소가 차지하고 있는 영역에 테두리 그리기.

* 단축속성 : `하나의 속성`에 `여러가지 속성값`을 넣을 수 있는 속성

* 예시

    ```css
    span{ border: 2px solid green; }
    /* 두께가 2px, 직선 모양, 초록색 테두리를 만들어줘 */
    ```

    ```css
    span{
        border-width: 2px;
        border-style: solid;
        border-color: green;
    }
    ```

### 박스모델 (Box-Model)

브라우저가 요소를 렌더링할 때, 각각의 요소는 기본적으로 사각형 형태로 영역을 차지하게 된다. 이 영역을 '박스'라 표현한다.

CSS는 박스의 크기, 위치, 속성(색, 배경, 테두리 모양 등)을 결정할 수 있다.

* 박스의 4가지 영역과 속성

    | 영역 | 속성 |
    | :--- | :--- |
    | 콘텐츠 영역 | `width`, `height` |
    | 안쪽 여백 | `padding` |
    | 테두리(border) | `border-width` |
    | 바깥쪽 여백 | `margin` |

* 박스모델 여백의 상,하,좌,우 개별적으로 두께를 정의하는 방법

    1. 하위 속성 정의하기

        * padding-top, padding-bottom, padding-left, padding-right
        * margin-top, margin-bottom, margin-left, margin-right

    2. 여러 값을 한 번에 정의하기

        * padding 과 margin 은 네 면의 여백에 대한 **단축속성**이다.

            ```css
            span{
                display: inline-block;
                width: 100px;
                height: 100px;
                margin: 10px 20px 30px 40px;
            }

            /* 인라인 요소를 블록으로 바꾸고,
            콘텐츠 영역의 가로세로 크기를 100px로 만들고,
            바깥쪽 테두리의 위=10px, 오른쪽=20px, 아래=30px, 왼쪽=40px로 만든다. 
            ```

* 박스 크기를 계산하는 방법

    * `box-sizing` 속성 : 요소의 width 와 height를 계산하는 방법을 지정

        | 속성값 | 의미 | 사용 |
        | :--- | :--- | :--- |
        | content-box | width 와 height가 `콘텐츠 영역만`을 포함 <br> default값 | 요소가 커져도 되니까 `콘텐츠 영역을 고정적으로 사용`하고 싶을 때 사용 |
        | border-box |  width 와 height가 `안쪽 여백과 테두리까지` 포함 | 안쪽 여백과 테두리를 크게하면 콘텐츠 영역이 줄어듬 | 콘텐츠 영역이 작아져도 괜찮으니까 `요소의 크기를 고정적으로 사용`하고 싶을 때 사용 |

    * 예시

        ```css
        div{
            box-sizing: border-box;
            width: 100px; height: 100px;
            border: 5px solid red;
            padding: 10px 20px;
        }

        /* content-box 속성값으로 하면 div의 박스 사이즈가 150x130 이 된다. */
        /* bordr-box 속성값으로 하면 div의 박스 사이즈가 100x100 이 된다. */
        ```

* 요소의 배경색상, 배경이미지

    * `background` 속성 : 콘텐츠의 배경을 정의

    * 단축 속성으로 색상, 이미지, 반복 등 다양한 하위 속성을 정의할 수 있다.

        | 하위 속성 | 역할 | 속성값 |
        | :--- | :--- | :--- |
        | `background-color` | 배경 색을 정의 | red |
        | `background-image` | 배경 이미지를 정의 | url(./images/test.jpeg) |
        | `background-position` | 배경 이미지의 초기 위치를 정의 | left top <br> center <br> center bottom |
        | `background-size` | 배경 이미지의 크기를 정의 | 500px 500px <br> cover <br> contain |
        | `background-repeat` | 배경 이미지의 반복 방법을 정의 | repeat <br> no-repeat |

        * contain : 이미지가 찌그러지거나 짤리지 않는 선에서의 최대 사이즈
        * cover : 이미지가 찌그러지지 않는 선에서의 최대 사이즈


### float 속성

* float 속성
    * 요소가 문서의 일반적인 흐름에서 제외되어 자신을 포함하고 있는 컨테이너의 왼쪽이나 오른쪽에 배치되게 한다.
    * 이때 요소는 문서의 흐름에선 제외되지만, 필요한 만큼의 공간은 차지한다.

* 여러가지 속성값

    | 속성값 | 의미 |
    | :--- | :--- |
    | `none` | 기본값. 원래 상태 |
    | `left` | 자신을 포함하고 있는 박스의 왼편에 떠 있어야 함 |
    | `right` | 자신을 포함하고 있는 박스의 오른편에 떠 있어야 함 |


### clear 속성

* clear 속성 : float 요소 이후에 표시되는 요소가 float을 해제(clear)하여 float 요소의 아래로 내려가게 할 수 있따.

* 여러가지 속성값

    | 속성값 | 의미 |
    | :--- | :--- |
    | `none` | 기본값. 아래로 이동되지 않음을 나타내는 키워드 |
    | `left` | float이 left인 요소의 아래로 내려가겠다. |
    | `right` | float이 right인 요소의 아래로 내려가겠다. |
    | `both` | float이 left 및 right 인 요소의 아래로 내려가겠다. |


### position 속성

* position 속성 : 문서 상에 요소를 배치하는 방법을 정의

* position이 요소의 배치 방법을 결정하면, top, bottom, right, left 가 최종 위치를 결정하는 방식이다.

    ```
    position: 난 이렇게 배치할거야;
    top: 윗면에서부터 얼만큼 떨어뜨릴거야;
    right: 오른쪽면에서부터 얼만큼 떨어뜨릴거야;
    bottom: 아랫면에서부터 얼만큼 떨어뜨릴거야;
    left: 왼쪽면에서부터 얼만큼 떨어뜨릴거야;
    ```

* 여러가지 속성값

    | 속성값 | 의미 |
    | :--- | :--- |
    | `static` | 기본값. 요소를 일반적인 문서 흐름에 따라 배치한다 |
    | `relative` | 일반적인 문서 흐름에 따라 배치하되, 상하좌우 위치 값에 따라 오프셋을 적용한다 |
    | `absolute` | 일반적인 문서 흐름에서 제거하고, 가장 가까운 position 지정 요소에 대해 상대적으로 오프셋을 적용한다 |
    | `fixed` | 일반적인 문서 흐름에서 제거하고, 지정한 위치에 고정된다 |
    | `sticky` | 일반적인 문서 흐름에서 제거하고, 스크롤 동작이 존재하는 가장 가까운 요소에 대해 오프셋을 적용한다 |

    * 오프셋 : 위치를 얼마간 이동시키는 것을 의미 (top, bottom, left, right)


### flexbox

* flexbox

    * flexbox란 박스 내 요소 간의 공간 배분과 정렬 기능을 제공하기 위한 **1차원 레이아웃 모델**이다.
    * flexbox를 1차원 모델이라 부르는 이유는, 레이아웃을 다룰 때 한번에 하나의 행,열만을 다룬다는 특성 때문이다.
    * flexbox에는 `주축(main-axis)`과 `교차축(cross-axis)`이 있다.
        * 주축이 **행**이면, 교차축은 **열**이다. 
        * 주축이 **열**이면, 교차축은 **행**이다.

 * flexbox 만들기

    * flex 컨테이너를 만들기 위해서는 컨테이너에 `display: flex`를 적용해야 한다.

    * 예시

        ```html
        <head>
            <style>
                .container{ display: flex; }
                .item{
                    width: 80px; height: 80px;
                    background-color: orange;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
            </div>  
        </body>
        ```

* `felx-direction` 속성

    * flex-direction 속성은 flexbox 내 요소를 배치할 때 사용할 주축 및 방향을 지정한다.

    * 여러가기 속성값

        | 속성값 | 의미 |
        | :--- | :--- |
        | `row` | 기본값. 주축은 행이고, 방향은 콘텐츠의 방향과 동일 |
        | `row-reverse` | 주축은 행이고, 방향은 콘텐츠의 방향과 반대 |
        | `column` | 주축은 열이고, 방향은 콘텐츠의 방향과 동일 |
        | `column-reverse` | 주축은 열이고, 방향은 콘텐츠의 방향과 반대 |

* flexbox와 관련된 여러가지 속성

| 속성 | 의미 | 속성값 |
| :--- | :--- | :--- |
| `justify-content` | 주축에서의 요소 배치 방법 | center <br> flex-start <br> flex-end <br> space-around <br> space-between | 위와 동일 |
| `align-items` | 교차축에서의 요소 배치 방법 | 위와 동일 |
| `align-self` | 교차축에서의 개별요소 배치 방법 | 위와 동일 |
| `flex-wrap` | 개별 요소들의 도합 크기가 컨테이너의 주축 길이보다 커졌을 때의 줄 바꿈 여부 | nowrap <br> wrap <br> wrap-reverse |


### 상속 (Inheritance)

* 상속이란, 하위 요소가 상위 요소의 스타일 속성값을 물려받는 것을 의미한다.

* 모두 상속이 되는건 아니다.

    | 상속 되는 속성 | 상속 안되는 속성 |
    | :--- | :--- |
    | color <br> font-faimly <br> font-size <br> font-weight <br> text-align <br> cursor | background-color <br> background-image <br> background-repeat <br> border <br> display | 


### 공용 키워드

* 모든 CSS 속성에 사용 가능한 키워드. "전역 값" 이라고도 한다.

    | 키워드 | 의미 |
    | :--- | :--- |
    | `inherit` | 상위 요소로부터 해당 속성의 값을 받아 사용한다 |
    | `initial` | (브라우저에 지정되어 있는)해당 속성의 기본값을 요소에 적용한다 |
    | `unset` | 상속 속성에 대해서는 inherit처럼, <br> 상속되지 않는 속성에 대해서는 initial처럼 적용된다 |


### z-index

* z-index 속성은 요소의 쌓임 순서(stack order)를 정의할 수 있다.

* 정수 값을 지정하여 쌓임 맥락(stacking context)에서의 레벨을 정의하는 방식으로 적용된다.

* 위치 지정 요소에 대해 적용할 수 있는 속성이다.

    * 위치 지정 요소(positioned element) : position 속성이 정의되어 있는 요소


## 3. JavaScript

### JavaScript란?

* Python과 같은 '프로그래밍 언어'
* html 과 css로 만든 웹페이지에 기능 또는 동작을 추가하는 역할을 한다.

### JavaScript 작성 방법

### HTML 문서에 JavaScript 문서를 적용하는 방법

1. script 태그 : html 파일의 \<body> 태그 안에 \<script></script> 태그를 추가하여 그 안에 JavaScript 코드를 작성

    * 예시

        ```html
        <script>
            /* <script> 태그 안에는 JavaScript 코드를 작성해야 한다 */
        </script>
        ```

3. 문서 간의 연결 : main.js 문서를 따로 작성하여 HTML 문서와 연결하기

    * html 문서의 \<head> 태그 안에 적는 \<script> 태그

        ```html
        <script src="main.js"></script>
        ```

        * `href` 속성 : 연결하고자 하는 외부 소스의 url을 기술하는 속성
        * `rel` 속성 : 현재 문서(html)와 외부 소스의 연관 관계를 기술하는 속성


### 객체

* 객체란?

    : 자바스크립트 코드 내에서 객체란 "값 또는 기능을 가지고 있는 데이터" 이다

* 객체 사용법

    * `객체.데이터` : 객체가 가지고 있는 숫자, 문자 등의 데이터를 사용할 수 있다.

    * `객체.기능()` : 객체가 가지고 있는 기능을 수행할 수 있다.


### 주석

    ```js
    // 한줄짜리 주석이다

    /* 주석인데
    여러줄에
    걸쳐
    쓸 수 있다 */
    ```


### console

* 콘솔은 브라우저의 디버깅 콘솔을 의미한다

    * 디버깅 콘솔 : 웹브라우저의 '개발자 도구'를 열면 메뉴 중 'console'이라는 항목이 존재하는데, 이것을 누르면 나타나는 화면이 디버깅 콘솔이다.

* 콘솔은 브라우저 안에 내장된 브라우저의 하위 객체이므로 브라우저 객체를 통해 접근할 수 있다.

    * `window.console`

* window는 생략가능하다.

    * `console`

* 코드에서 `세미콜론(;)`은 구문이 끝났다는 것을 의미한다. (선택사항)


### 변수

* 변수 만드는 방법

    ```js
    // 방법①
    let 변수이름 = 데이터;
    ```

    ```js
    // 방법②
    let 변수이름;       // 변수 선언
    변수이름 = 데이터;   // 변수 초기화
    ```

* 변수명 제약사항

    * 오직 `문자`와 `숫자`, 기호는 `$`과 `_`만 쓸 수 있다.
    * 첫 번째 글자로 숫자가 올 수 없다.
    * 이미 다른 뜻을 가지고 있는 단어(키워드)는 변수명으로 사용할 수 없다.


### 상수

* 상수(constant)

    * 변하지 않는 값 (↔ 변수)
    * 단 하나의 데이터만을 위해 사용하는 이름표로써, 값의 변경이 불가능하다.

* 상수 만드는 방법

    ```js
    const 상수이름 = 데이터;
    ```


### 템플릿 리터럴 (Template Literal)

* 템플릿 리터럴

    * 기존의 문자열은 따옴표(")를 이용해 표현했지만, 템플릿 리터럴은 ``백틱(`)``을 이용해서 표현한다.

        ```js
        // 따옴표를 이용한 기존의 문자열
        const str1 = '작은 따옴표'
        const str2 = "큰 따옴표"

        // 백틱을 이용한 템플릿 리터럴
        const str3 = `백틱`
        ```

    * 표현식을 내장할 수 있는 문자열 표현법이다.

    * 템플릿 리터럴로 표현한 문자열 내부에 **플레이스홀더**(`${}`)를 기입하고, 그안에 데이터를 기입하면 데이터는 문자열의 멤버가 된다.

        ```js
        const data1 = "데이터"
        const str1 = `문자열 중간에 ${data1} 삽입하기`
        console.log(str1)

        // 결과 : 문자열 중간에 데이터 삽입하기
        ```

    * 플레이스홀더(`${}`) 안에는 문자열,숫자,변수,상수,메서드 모두 들어갈 수 있다.


### 연산 그리고 연산자

* 산술 연산



* 대입 연산

    | 복합대입연산자 | 식 | 해석 |
    | :--- | :--- | :--- |
    | 대입 | a = b |  |
    | 더하여 대입 | a += b | a = a + b |
    | 빼서 대입 | a-= b | a = a - b |
    | 곱하여 대입 | a *= b | a = a * b |
    | 나누어 대입 | a /= b | a = a / b |


### null / undefined / boolean

* `null` : 데이터가 '없다'를 의미하는 데이터.

* `undefined` : 아직 데이터가 정의되지 않았음을 나타내는 데이터.

    ```js
    // 변수를 선언만 하고 초기화를 하지 않았을 때
    let number;
    console.log(number);    // 결과 : undefined
    ```

* `boolean` : true/false를 나타내는 데이터 타입.

    * 무조건 **소문자**로 써야한다.

    ```js
    // typeof 를 써서 데이터 타입이 뭔지 알 수 있다
    let data = true;
    console.log(typeof data)    // 결과 : boolean
    ```


### DOM (Document Object Model)

* 렌더링의 세부 과정

    : 브라우저는 HTML 코드를 해석해서 요소들을 트리 형태로 구조화해 표현하는 **객체**를 생성한다. 이를 `DOM`이라 하며, 브라우저는 DOM을 통해 화면에 웹 컨텐츠들을 렌더링한다.

* DOM의 존재 목적

    : DOM은 JavaScript를 사용해서 웹 콘텐츠를 추가,수정,삭제하거나 마우스 클릭, 키보드 타이핑 등 이벤트에 대한 처리를 정의할 수 있도록 제공되는 프로그래밍 인터페이스(interface)이다.


###

* window.document

    * 브라우저 객체 window의 document 속성은 창이 포함한 문서를 참조한다.
    * 현재 브라우저에 렌더링되고 있는 문서를 의미
    * 페이지 콘텐츠, 즉 DOM에 대한 진입점 역할을 하는 프로그래밍 인터페이스이다. 이를 이용하면 페이지의 정보를 얻거나 웹 요소를 생성 및 조작할 수 있다.
    * 문서(html,xml,svg 등)에 대한 다양한 API를 제공한다.
        * API (Application Programming Interface)



### document의 대표적인 메서드

* `document.querySelector`

    * 선택자를 인자로 전달받아, 전달받은 선택자와 일치하는 문서 내 첫 번째 요소(element)를 반환한다.
    * 일치하는 요소가 없으면 null 데이터를 반환한다.
    * 인자로 전달되는 선택자는 문자열 타입의 '유효한 CSS 선택자'를 의미한다.

    ```js
    // p태그를 반환
    document.querySelector("p")

    // 콘솔 로그에 <p>가 출력된다.
    console.log(document.querySelector("p"))

    // id가 text인 요소를 반환
    document.querySelector("#text")
    ```

* `document.getElementById`

    * id를 인자로 전달받아, 전달받은 선택자와 일치하는 문서 내 요소를 반환.
    * 일치하는 요소가 없으면 null 데이터를 반환한다.
    * 인자로 전달되는 선택자는 문자열 타입의 'id'를 의미한다.

    ```js
    // id가 text인 요소를 찾아서 반환
    document.getElementById("text")
    ```

* 예시

    ```js
    // p요소를 반환받아 상수 p 에 저장한다
    const p = documnet.querySelector("p");

    // p요소의 textContent 속성을 콘솔에 출력한다
    console.log(p.textContent)

    // p요소의 textContent 값을 변경한다.
    p.textContent = "텍스트를 이걸로 바꿔라"

    // textContent : 요소 안에 있는 텍스트를 반환하거나 변경할 수 있는 속성.
    ```


### 비교 연산

* 비교 연산식은 항상 `boolean 데이터`를 반환한다.

* 4가지 대소 비교

    | 연산자 | 의미 | 사용 형태 |
    | :--- | :--- | :--- |
    | > | 크다 | A > B |
    | < | 작다 | A < B |
    | >= | 크거나 같다 | A >= B |
    | <= | 작거나 같다 | A <= B |

* 4가지 등가 비교

    | 연산자 | 의미 | 사용 형태 |
    | :--- | :--- | :--- |
    | == | 같다 | A = B |
    | != | 같지 않다 | A != B |
    | === | 완전히 같다 | A === B |
    | !== | 완전히 같지 않다 | A !== |

    * `=` 하나는 대입 연산자를 의미하므로, 두개부터 비교 연산자 역할을 담당한다.

    * `==` 는 추상적(abstract) 같음 비교로써, 자료형이 달라도 같다고 판단하는 비교

    * `===` 는 엄격한(strict) 같음 비교로써, 자료형과 데이터가 모두 일치해야만 같다고 판단하는 비교.


    ```js
    let num1 = '3'  // 문자열 3
    let num2 = 3    // 숫자 3

    console.log( num1 == num2 )     // 결과 : true
    console.log( num1 === num2 )    // 결과 : false
    ```


### if 조건문

* if 조건문의 형태

    ```js
    if(조건){
        // 조건이 true일 때 실행할 코드
    }
    ```

* 예시

    ```js
    let number = 3
    if(number ===3){
        console.log("It is true")
    }

    // 변수 number의 값이 3과 같다면 콘솔에 "It is true"를 출력해라
    ```

* if-else 조건문의 형태

    ```js
    if(조건){
        // 조건이 true일 때 실행할 코드
    }else{
        // 조건이 false일 때 실행할 코드
    }
    ```


### while 반복문

* 기본 형태

    ```js
    while(조건){
        // 조건이 true인 동안에 반복 수행할 코드
    }
    ```

* 예시

    ```js
    let number = 1

    while(number < 3){          // number 가 3보다 작으면 아래 코드를 반복
        console.log(number)     // console 창에 number 변수 출력
        number += 1             // number를 1씩 증가
    }


### for 반복문

* 기본 형태

    ```js
    for(초기식; 조건식; 반복식){
        // 조건이 true인 경우 반복 수행할 코드
    }
    ```

    * 초기식 : 반복 조건의 초기화 작업
        * for 문이 끝나면 초기식에서 선언한 변수는 사라진다.
    * 반복식 : 반복이 한 번 끝날 때마다 실행될 작업

* 예시

    ```js
    for(let i = 1; i <= 3; i += 1>){
        console.log(i)
    }

    // i 변수를 1로 초기화

    // i 변수가 3보다 작거나 같나?
    // 콘솔 창에 출력
    // i 변수에 1을 더한다

    // i 변수가 3보다 작거나 같나?
    // 콘솔 창에 출력
    // i 변수에 1을 더한다
    ```


### 함수

* 함수를 만드는 두 가지 방법

    1. 함수 선언식

        ```js
        function 함수명(){
            // 함수의 기능을 표현한 구문
        }

        // 함수 호출 방법 : 함수명()
        ```

    2. 함수 표현식

        ```js
        const 함수명 = function(){
            // 함수의 기능을 표현한 구문
        }

        // 함수 호출 방법 : 함수명()
        ```

* 함수 선언식과 표현식의 차이

    * 함수 선언식은 함수 호출문을 선언식 위에 작성해도 동작을 한다.
    * 함수 표현식은 함수 호출문이 무조건 표현식 아래에 있어야 동작을 한다.

* 함수 내부에서 선언된 변수(지역변수)는 함수 바깥에서 사용할 수 없다.


### 함수의 데이터 반환

* `return 키워드`

    * 함수로부터 데이터를 반환한다.
    * 함수를 끝낸다.
    * 하나의 데이터만 반환한다.


### 함수의 매개변수와 인자

* `매개변수(parameter)`

    * 인자를 전달받기 위해 만들어 둔 변수
    * 함수가 호출될 때 전달되는 데이터에 이름을 붙여주는 것
    * 매개변수는 쉼표(,)를 사용하여 여러개 추가할 수 있다.

* `인자(argument)`

    * 실제 함수 호출 시에 전달되는 데이터
    * 사람이 입력한 데이터

* 예시

    ```js
    function sayFood(food1, food2){
        console.log(food1)
        console.log(food2)
        console.log("먹고싶다")
    }

    sayFood("치킨", "피자")
    ```


### 이벤트(event)

* `이벤트`

    * 사용 중이거나 프로그래밍 중인 시스템 내에서 일어나는 사건을 뜻한다.
    * 이벤트는 이벤트 핸들러를 가진다,

    * 예시

        * 웹페이지 사용자가 버튼을 클릭했다 → 클릭 이벤트
        * 웹페이지 사용자가 키보드를 눌렀다 → 키다운 이벤트
        * 웹페이지 사용자가 입력 폼의 내용을 제출했다 → 제출 이벤트

* `이벤트 핸들러`(Event Handler)

    * 이벤트가 발생되면 실행될 코드 블럭을 뜻한다.
    * 주로 **함수**가 이 역할을 담당
    * 이벤트 핸들러 함수명은 보통 `handle함수명` 으로 짓는다.

* `이벤트 핸들러 등록`(Event Handler Register)

    * 이벤트 핸들러 역할을 수행할 함수를 정의하는 것
    * "이벤트가 발생하면, 이 함수를 호출해라" 라는 뜻

* 예시

    ```js
    const handleClick = function(){
        window.alert("환영합니다")
    }

    const button = document.querySelector("button)

    button.onclick = handleClick    // button에서 클릭 이벤트가 발생하면 handleClick 함수를 호출해라
    ```

* 기본 형태

    ```js
    // 이벤트가 발생할 수 있는 타겟을 선택하고, 이벤트 핸들러 속성에 이벤트 핸들러를 대입한다.

    타겟.on이벤트명 = 이벤트핸들러 함수
    ```

* 이벤트 핸들러 등록 예시

    ```js
    // button이 클릭되었을 때, handleClick 함수가 발동한다.
    button.onclick = handleClick
    ```

* 대표적인 이벤트 핸들러 속성

    | 카테고리 | 속성명 | 발생 시점 | 주요 활용 예 |
    | :--- | :--- | :--- | :--- |
    | 마우스 | `onclick` | 요소를 클릭했을 때 | 버튼 클릭 <br> 링크 이동 |
    |       | `ondblclick` | 요소를 더블클릭 했을 때 | 이미지 확대 |
    |       | `onmouseenter` | 마우스 커서가 요소 내부로 들어왔을 때 | 툴팁 표시 |
    |       | `onmouseleave` | 마우스 커서가 요소 밖으로 나갔을 때 | 툴팁 숨기기 |
    | 키보드 | `onkeydown` | 키보드의 키를 누르는 순간 | Enter키 입력 감지 |
    |       | `onkeyup` | 누르고 있던 키에서 손을 뗐을 때 | 검색어 자동완성 |
    | 폼(Form) | `onchange` | 입력 요소의 값이 변경되고 포커스를 잃었을 때 | Select 박스 선택 변경 |
    |       | `oninput` | 입력 요소의 값이 변경되는 즉시 | 실시간 입력값 유효성 검사 |
    |       | `onsubmit` | Form 양식이 전송될 때 | 폼 데이터 유효성 검증 |
    | 포커스 | `onfocus` | 요소가 포커스를 얻었을 때 | 입력창 테두리 강조 |
    |       | `onblur` | 요소가 포커스를 잃었을 때 | 입력값 최종 검증 |
    | 문서/창 | `onload` | 모든 리소스 로드가 완료되었을 때 | 초기화 작업 실행 |
    |       | `onscroll` | 사용자가 스크롤을 올리거나 내릴 때 | 무한 스크롤 |

* 예시

    ```js
    const inputClick = document.querySelector("#push")

    const handleClick = function(){
        console.log("클릭되고 있어요")
    }

    inputclick.onclick = handleClick

    // 아래 코드처럼 써도 똑같이 작동한다
    /* inputclick.onclick = function(){
        console.log("클릭되고 있어요")
        }
    */
    ```


### addEventListener 메서드

* 구조

    ```js
    상수명.addEventListener('발생할 이벤트명', 이벤트핸들러 함수)
    ```

* 이벤트 핸들러 등록하는 방법

    ```js
    const target = document.querySelector("...")

    // 1. 이벤트 핸들러 속성을 이용한 방식
    target.onclick = function(){}

    // 2. addEventListener 를 이용한 방식
    target.addEventListener('click', function(){})
    ```


### removeEvenetListener 메서드

* 구조

    ```js
    상수명.removeEventListener('발생할 이벤트명', 이벤트핸들러 함수)
    ```


### 이벤트 객체

* 추가적인 기능과 정보를 제공하기 위해 이벤트 핸들러에 자동으로 전달되는 데이터


### createElement & appendChild 메서드

* document.`createElement` 메서드 : 지정된 이름의 HTML 요소를 만들어 반환해 준다.

    ```js
    document.createElement('div')
    ```

* appendChild 메서드 : DOM 내 개별 요소(=노드)에 자식 요소를 추가할 때 사용.

    ```js
    target.appendChild(자식으로_추가할_요소)
    ```

    ```js
    // p요소를 생성
    const p = document.createElement("p")

    // html의 <body> 태그의 자식요소로 추가
    document.body.appendChild(p)
    ```


### value 속성

* `입력 요소` : \<input>, \<select> 처럼 사용자로부터 입력을 받는데 사용되는 요소.

* 사용자가 입력한 값을 읽어들일 때는 요소의 value 속성에 접근.

* `textContent` , `innerText` : **요소의 텍스트**에 접근할 때 사용하는 속성.

* `value` : **사용자가 요소에 입력한 값**에 접근할 때 사용하는 속성

    * value에 접근해서 할 수 있는 일은 **읽기**와 **쓰기**이다.

        ```js
        // 대상 요소의 사용자 입력값을 읽어 console에 출력.
        console.log(target.value)

        // 대상 요소의 사용자 입력값을 "변경할 값"으로 바꾼다.
        target.value = "변경할 값"
        ```


### 삼항 연산

* 세 개의 항을 이용해 결과를 반환하는 연산

* 보통 if문의 단축 형태로 사용되기 때문에, **삼항 조건 연산식**이라고도 부른다.

* 구문 형식

    ```js
    조건식 ? 참일 경우의 결과 : 거짓일 경우의 결과
    ```

    * ① `조건식` :  조건 역할을 하는 표현식
    * ② `참일 경우의 결과` : 조건식의 결과가 참일 경우 반환될 결과
    * ③ `거짓일 경우의 결과` : 조건식의 결과가 거짓일 경우 반환될 결과

* 예시

    ```js
    let result;

    result = 3 > 2 ? "true" : "false"

    console.log(result)

    // true가 출력된다
    ```


### 타이머 관련 기능들

* `setTimeout` 메서드

    * 정해진 시간이 지나면 주어진 함수를 실행 해주는 타이머 메서드

    * 사용 방법 

        ```js
        setTimeout (실행할 함수, ms 단위의 시간)
        ```

    * 예시

        ```js
        // 1000ms가 지나면 함수를 실행한다
        setTimeout(function(){
            console.log("재미있다")
        }, 1000)
        ```

* `setInterval` 메서드

    * 일정한 시간 간격에 따라 함수를 반복 실해할 수 있도록 해주는 타이머 메서드
    * 타이머를 등록하는 동시에 타이머 자신의 고유 ID를 랜덤숫자(0제외)로 지정해서 반환한다.

    * 사용 방법

        ```js
        setInterval(반복 실행할 함수, ms 단위의 시간)
        ```

    * 예시

        ```js
        // 500ms 마다 함수를 반복 실행한다
        setInterval(function(){
            console.log("안녕하세요")
        }, 500)
        ```


* `clearInterval` 메서드

    * setInterval 메서드가 호출되어 반복 실행할 함수 타이머를 등록하면, 타이머는 0이 아닌 숫자를 반환한다. 숫자는 타이머의 ID를 의미하며, 이를 clearInterval 메서드에 전달하면 해당 타이머의 반복 실행이 취소된다.

    * clearInterval 메서드로 setInterval 메서드로 반복시킨 동작을 멈추게 한다.

    * 예시

        ```js
        // 셋팅된 타이머의 반환값(ID)을 변수에 저장
        let timer;
        timer = setInterval(function(){
            console.log("안녕하세요")
        }, 500)

        // 셋팅된 타이머를 멈춘다
        clearInterval(timer)
        ```


### Element.classList

* 웹 요소(element)로부터 클래스 콜렉션을 반환하는 읽기 전용 속성

* 예시

    ```html
    <p class="hello greet good">안녕하세요</p>
    ```

    ```js
    const p = document.querySelector(`p`)
    console.log(p.classList)

    //출력값 : DOMTokenList { 0: 'hello', 1: 'greet', 2: 'good' }
    ```

* 클래스 콜렉션의 메서드

    | 메서드 | 기능 | 사용 예 |
    | :--- | :--- | :--- |
    | add | 지정한 클래스 값 추가 | add("new_clss") |
    | remove | 지정한 클래스 값 제거 | remove{"old_class"} |
    | item | 인덱스를 이용해 클래스 값 반환 | item(1) |
    | toggle | 클래스 값 토글링 | toggle("some_value") |
    | contains | 지정한 클래스 값 존재 여부 확인 | contains("is_contains") |
    | replace | 기존 클래스를 새 클래스로 대체 | replace("old","new") |

* 예시

    ```html
    <body>
        <h1>실험용 테스트</h1>
        <button id="add">add</button>
        <button id="remove">remove</button>
        <button id="toggle">toggle</button>
    </body>
    ```

    ```js
    const h1 = document.querySelector('h1')
    const addBtn = document.querySelector('#add')
    const removeBtn = document.querySelector('#remove')
    const toggleBtn = document.querySelector('#toggle')

    // <h1> 태그에 class = "text" 를 생성한다.
    addBtn.addEventListener('click', function(){
        h1.classList.add('text')
    })
    // <h1> 태그의 class = "text" 를 삭제한다.
    removeBtn.addEventListener('click', function(){
        h1.classList.remove('text')
    })
    // <h1> 태그의 class = "text" 가 있으면 삭제하고, 없으면 생성한다.
    toggleBtn.addEventListener('click', function(){
        h1.classList.toggle('text')
    })
    ```


### window.LocalStorage

* window객체의 LocalStorage 속성은 현재 도메인의 로컬 저장소에 접근할 수 있게 해준다.

    * `로컬 저장소` : 웹브라우저에서 각 도메인에 대해 할당해주는 저장 공간

* 데이터를 key 와 value 값으로 저장한다.

    * key는 중복될 수 없다
    * 문자열 형태의 데이터만 보관할 수 있다.

* LocalStorage의 여러 메서드

    | 메서드 | 기능 | 예시 |
    | :--- | :--- | :--- |
    | `setItem` | key 와 value 를 전달받아 저장 | setItem("key", "value") |
    | `getItem` | 전달받은 key에 해당하는 value 반환 | getItem("key") |
    | `removeItem` | 전달받은 key에 해당하는 데이터 삭제 | removeItem("key") |
    | `clear` | 모든 데이터 삭제 | clear() |

* 예시

    ```js
    const myName = "코디세이"

    console.log(myName)

    // LocalStorage에 데이터를 저장
    // setItem(데이터의 이름, 실제 저장할 데이터)
    localStorage.setItem("myName", myName)

    // LocalStorage에 저장된 "myName"의 value값을 가져온다
    const myName = localStorage.getItem("myName")

    // LocalStorage에 저장된 "myName" 데이터를 지운다.
    localStorage.removeItem("myName")

    // LocalStorage에 저장된 모든 데이터 삭제
    localStorage.clear()
    ```



## 4. 반응형 웹

### 반응형 웹이란?

* 다양한 기기나 브라우저의 크기에 맞게 구성이나 크기를 변경해가며 반응하는 웹문서

* 반응형 웹사이트의 핵심 키워드는 "`가변성`" 이다.

* html 문서에 \<head> 태그 안에 viewport 속성에 대한 코드를 추가해야 한다.

    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```

### 여러가지 단위들

* `px` (pixel) : 절대 길이 단위
* `em` : 부모 요소의 글자 크기에 비례하는 상대 단위

    ```html
    <div style="font-size: 20px; ">
        <p>자식 요소의 1em은 20px</p>
        <p>자식 요소의 2em은 40px</p>
    </div>
    ```

* `rem` (root em) : root 요소인 \<html> 태그의 글자 크기에 비례하는 상대 단위

    * root 요소는 \<html> 태그의 요소를 뜻한다.
    * root 요소의 기본 글자 크기는 16px 이다.
    * 1rem 은 16px, 2rem 은 32px 이다.

* em으로 여백 크기(padding, margin)를 정할 때는 부모가 아닌 자기 자신의 글자 크기를 기준으로 한다.


### 화면 크기에 따라 반응하는 단위들

* viewport의 크기를 기반으로 값을 계산하여 크기를 결정하는 가변 단위

    * 1`vw` (Viewport Width) : 뷰포트 너비의 100분의 1
    * 10`vh` (Viewport Height) : 뷰포트 높이의 100분의 10
    * 50`vmin` (Viewport Minimum) : 뷰포트 높이와 너비 중 작은 쪽의 100분의 50
    * 1`vmax` (Viewport Maximum) : 뷰포트 높이와 너비 중 큰 쪽의 100분의 1

* 예시

    ```css
    /* 뷰포트 너비의 100분의 1 */
    font-size: 1vw;

    /* 뷰포트 높이의 100분의 1 */
    font-size: 1vh;

    /* 뷰포트 높이와 너비 중 작은 쪽의 100분의 1 */
    font-size: 1vmin;

    /* 뷰포트 높이와 너비 중 큰 쪽의 100분의 1 */
    font-size: 1vmax;
    ```


### 가변 레이아웃

* 비율에 기반한 크기 조절

* `%` : 부모 요소를 기준으로 상대적 크기를 지정할 때 사용

    ```css
    /* 부모 요소의 글자 크기의 50% */
    font-size: 50%

    /* 부모 요소의 높이의 50% */
    height: 50%

    /* 부모 요소의 여백의 10% */
    margin: 10%
    padding: 10%
    ```


### 함수 개념과 calc()

* calc()를 이용하면 계산식의 결과를 `속성값`으로 지정할 수 있다.

    ```css
    width: calc(100% - 100px);
    ``


### 미디어 쿼리 (media query)

* 미디어 쿼리는 미디어 타입을 인식하고, 콘텐츠를 읽어들이는 기기나 브라우저의 물리적 속성을 감지할 수 있는 기능이다.

* 구성 

    * 미디어 타입
    * 조건에 대한 물음 (쿼리)

* 미디어 타입과 쿼리의 종류

    | 속성명 | 정의 |
    | :--- | :--- |
    | min-width | 디스플레이 영역의 최소 너비 |
    | max-width | 디스플레이 영역의 최대 너비 |
    | min-height | 디스플레이 영역의 최소 높이 |
    | max-height | 디스플레이 영역의 최대 높이 |
    | orientation | portrait 또는 landscape 감지 |
    | color | 기기의 색상 당 비트 수 |
    | color-index | 출력 기기의 색상 테이블 수 |
    | aspect-ratio | 디스플레이 영역의 너비와 높이의 비율 |

* 구조

    ```css
    @media 미디어_타입 and (조건에_대한_물음) {
        /*
        미디어 타입과 조건을
        모두 만족할 때 덮어쒸울
        스타일 선언문
        */
    }

* 예시

    ```css
    @media screen and (max-width: 768px) {
        /*
        화면(screen)의
        너비가 768px 이하일 경우에
        여기에 정의된 스타일 선언문을
        추가 적용할 것이다
        */
    }


### 가변 이미지

* 이미지 요소에도 상대 단위 em, vw, % 등을 사용할 수 있다.

* 예시

    ```css
    /* 이미지의 가로 크기가 200px보다 커질 수 없다 */
    img{
        max-width: 200px;
    }

    /* 이미지의 가로 크기가 부모 요소의 크기보다 커질 수 없다 */
    img{
        max-width: 100%;
    }
    ```


### 가변 동영상


### 모듈화 디자인 

* 컴포넌트(component) : 독립적이고 재사용이 가능한 모듈을 뜻한다.



## 웹 사이트를 구성하는 기본적인 3대 요소

1. index.html (구조 - 뼈대)

    * 역할 : 웹 페이지의 내용물과 구조를 정의하는 **HTML 파일**
    * 내용
        * 텍스트, 이미지, 버튼, 입력창 등 눈에 보이는 구성을 배치
        * 제목은 ```<h1>```, 문단은 ```<p>```, 버튼은 ```<button>``` 처럼 태그를 사용해 작성

2. style.css (디자인 - 옷과 인테리어)

    * 역할 : HTML로 만든 뼈대에 색상,폰트,크기,배치 등 스타일을 입히는 **CSS 파일**
    * 내용
        * 글자 색상 변경(colorL red;), 배경색 지정(background-color: black;), 요소들의 크기와 위치(Flexbox, Grid)를 잡는다

3. main.js (동작 - 근육과 신경망)

    * 역할 : 웹 페이지에 클릭 반응, 데이터 처리, 애니메이션 등 상호작용을 부여하는 **JavaScript 파일**
    * 내용
        * "버튼을 누르면 다크 모드로 변해라" 같은 동적인 기능을 구현
        * HTML 파일 내부 하단(보통 </body> 바로 전)에 <script src="main.js"></script> 코드로 연결하여 사용.

4. 요약

| 파일명 | 파일 종류 | 역할 | 예시 |
| :--- | :--- | :--- | :--- |
| ```index.html``` | HTML | 구조/내용 | "로그인 버튼 만들어줘" |
| ```style.css``` | CSS | 디자인/스타일 | "버튼의 색상은 파란색, 모서리는 둥글게 해줘" |
| ```main.js``` | JavaScript | 동작/상호작용 | "버튼 클릭하면 '로그인 성공' 메시지 띄어줘" |


## HTML 시맨틱(Semantic) 구조

* 정의 : 아무 뜻 없는 상자(<div>) 대신, 자기 역할이 명확한 이름표 태그(<header>, <main> 등)를 써서 웹사이트 구조를 짜는 것

* 시맨틱 태그의 종류

    * ```<header>``` : 웹사이트의 상단 영역
    * ```<nav>``` : 다른 페이지로 이동하는 메뉴/링크
    * ```<main>``` : 해당 페이지의 가장 핵심인 주요 **본문 내용**
    * ```<section>``` : 주제별로 연관된 콘텐츠를 묶는 큰 구역
    * ```<article>``` : 블로그 글, 뉴스 기사 처럼 독립적으로 떼어놓아도 완벽한 하나의 콘텐츠
    * ```<aside>``` : 사이드바, 광고 관련 링크 등 주요 내영 옆의 부가 정보
    * ```<footer>``` : 웹사이트 하단 영역 (저작권 정보, 회사 주소, 이용약관 등)

## Hero

* 정의 : 웹사이트 메인 페이지의 최상단(헤더 바로 아래)에 위치하는 가장 크고 시각적으로 눈에 띄는 핵심 섹션을 의미

## 모바일 퍼스트(Mobile-First)

* 정의 : 웹이나 앱을 개발할 때 모바일 기기(작은 화면)의 레이아웃과 디자인을 가장 먼저 설계하고 개발한 뒤, 태블릿과 PC(큰 화면)로 점차 확장해 나가는 접근 기법

* 반댓말 : Desktop-Frist

## 스크롤 탑(Scroll Top)

* 정의 : 웹 페이지의 최상단으로 스크롤하는 기능

## DOM 요소(DOM Element)

* DOM = Document Object Model(문서 객체 모델)

* 정의 : 브라우저가 HTML 코드를 읽어들인 뒤, 자바스크립트로 다룰 수 있도록 메모리에 만들어낸 ‘살아있는 HTML 객체(Object)’

* HTML 태그 vs DOM 요소

    * HTML 태그(문서 상태) : 파일에 적힌 그냥 정적인 텍스트
    * DOM 요소(메모리 상태) : 브라우저가 텍스트를 읽어서 만든 실제 객체