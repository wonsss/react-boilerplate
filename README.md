# React Boilerplate

## 소개

React 프로젝트 빌드 시 사용하는 기초 환경설정입니다.

## 사용 라이브러리

- [React](https://ko.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- 라우팅 : [React Router](https://reactrouter.com/en/main)
- CSS 스타일링 : [emotions](https://emotion.sh/docs/introduction)
- 코드 포매팅 : [Prettier](https://prettier.io/)
- 린팅 : [ESlint](https://eslint.org/)
- 전역상태 관리 : [Recoil](https://recoiljs.org/ko/)
- API 연동 : [Axios](https://axios-http.com/), [React Query](https://react-query-v3.tanstack.com/)
- 테스트 : [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [MSW](https://mswjs.io/)
- 패키지 매니저: [Yarn](https://yarnpkg.com/)
- 빌드 환경설정 : [webpack], [babel-loader]

- 기타 특징
  - 절대경로
  - import 순서 자동정렬
  - github workflow(PR 테스트 후 코멘트)
  - PR template
  - development, production 모드에 따라 다른 빌드 환경설정

## Scripts
* node version : 14.17.0

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
