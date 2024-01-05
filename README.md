# React Boilerplate

## 소개

React 프로젝트 빌드 시 사용하는 기초 환경설정입니다.

CRA를 사용하지 않고 Webpack, Babel로 개발, 프로덕션을 구분한 빌드 환경설정을 하였습니다.

Jest, RTL을 사용하여 테스트 환경설정을 하였고, PR을 만들면 자동 테스트 후 PR에 테스트 결과 코멘트가 달리도록 기본 설정했습니다.

## 템플릿 사용방법

해당 템플릿으로 새 저장소 만들어서 프로젝트 시작하기

<img width="538" alt="스크린샷 2022-12-19 오후 3 49 57" src="https://user-images.githubusercontent.com/59413128/208365024-e5286244-5e0c-4c6a-8089-41a9afc4d949.png">

## 사용 라이브러리

- [React](https://ko.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- 라우팅 : [React Router](https://reactrouter.com/en/main)
- CSS 스타일링 : [emotions](https://emotion.sh/docs/introduction)
- 코드 포매팅 : [Prettier](https://prettier.io/)
- 린팅 : [ESlint](https://eslint.org/), [StyleLint](https://stylelint.io/)
- 전역상태 관리 : [Recoil](https://recoiljs.org/ko/)
- API 연동 : [Axios](https://axios-http.com/), [React Query](https://react-query-v3.tanstack.com/)
- 테스트 : [Storybook](https://storybook.js.org/), [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [MSW](https://mswjs.io/)
- 패키지 매니저: [Yarn](https://yarnpkg.com/)
- 빌드 환경설정 : [Webpack](https://webpack.kr/), [babel-loader](https://www.npmjs.com/package/babel-loader)

- 기타 특징
  - 절대경로
  - import 순서 자동정렬
  - CSS 순서 자동정렬
  - github workflow(PR 테스트 후 코멘트)
  - PR template
  - development, production 모드에 따라 최적화된 빌드 환경설정 구분
  - WebAPI, ECMAScript, CSS 브라우저 호환성 체크 린트 플러그인 추가

## Scripts

- node version : 18.16.1

- 설치

```bash
yarn
```

- development 모드로 구동

```bash
yarn run start:dev
```

- production 모드로 빌드

```bash
yarn run build:prod
```

- 테스트

```bash
yarn run test
```

- 스토리북

```bash
yarn run storybook
```
