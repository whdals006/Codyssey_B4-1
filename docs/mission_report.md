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