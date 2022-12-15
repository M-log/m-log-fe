# 마이다스 기술 블로그 사용법

## Turborepo

[터보레포](https://turbo.build/)에 대해서는 링크 참고 부탁드립니다 허허,,

## 명령어

### root
- ```npm run build```
  - 빌드합니다.
- ```npm run dev```
  - dev 버전으로 돌립니다.
- ```npm run prettify --path={path}```
  - prettier 돌립니다

**주의사항**

```bash
npm run prettify --path=ui
```
꼴로 입력하면 ui 폴더 내의 ts, tsx 파일들에 prettier가 적용됩니다. 각자에게 맞는 경로에서 사용하심 됩니다.

- - -
## 폴더 구조
```
├── apps
│   └── web
│       └── package.json
├── package
│   ├── eslint-config-custom
│   │   ├── base-eslint-preset.js
│   │   └── .eslintrc.js
│   ├── tsconfig
│   │   ├── base.json
│   │   └── react-library.json
│   ├── ui
│   ├── Users or Hyeon or something
│   │   └── Some web project
│   └── ...
└── .gitignore
``` 
- **apps**
  - 퍼블리싱 될 서비스가 올라갈 폴더입니다.
  - 각자 만든 프로젝트가 모듈로 잘 export 되는지 확인 하려면 이 곳에 올리고
    실행시켜보면 됩니다.
    - **web**
      - 임시로 올린 default 프로젝트입니다. 
        - **package.json**
          - packages에서 작업한 결과물을 어떻게 받아오는지 보여드리기 위해 작성합니다.
            ```dependencies``` 내부에 ```"ui": "*"``` 처럼 불러오면 됩니다.
- **packages**
  - 실질적으로 각자 작업할 공간입니다.
  - 해당 폴더에서 작업 후 모듈로 export 하시면 됩니다.
    - **eslint-config-custom**
      - **base-eslint-preset.js**
        - 기본 eslint 설정이 있습니다.
      - **.eslintrc.js**
        - 어떻게 기본 설정을 가져오고, 오버라이드 하는지 보여드리기 위해 임의로 만든 파일입니다.
        - 모듈을 require로 가져와 스프레드 해주고, 각자 사용하고 싶은 익스텐스, 플러그인, 규칙 등을
          예시에 나와있는 rules처럼 오버라이드 하시면 됩니다.
    - **tsconfig**
      - **base.json**
        - 기본 tsconfig 세팅이 있습니다.
      - **react-library.json**
        - packages에서 리액트로 작업하실 때 가져오면 되는 파일입니다.
    - **ui**
      - turbo 세팅할 때 기본적으로 생기는 디랙토린데, 내부 파일들 보면서 세팅하시면 편할 것 같아 남겨두었습니다.
- **.gitignore**
  - 만약 본인의 node_modules나 build 등 올라가지 않아도 될 항목들이 잡힌다면 이그노어 해주세요.
