# Testing(Jest) with nextjs

## 라이브러리 설치

```bash
// jest 설치
yarn add jest jest-dom jest-environment-jsdom ts-jest babel-jest --dev

// testing-library를 위한 모듈 설치
yarn add @testing-library/user-event @testing-library/react-hooks @testing-library/react @testing-library/jest-dom @testing-library/dom --dev
```

## Jest Config 설정
jest.config.js 파일 생성
```javascript
const nextJest = require("next/jest");
const createJestConfig = nextJest({
	dir: "./",
});
const customJestConfig = {
	moduleDirectories: ["node_modules", "<rootDir>/"],
	testEnvironment: "jest-environment-jsdom",
	moduleNameMapper: { 
		// 해당 부분은 tsconfig, jsconfig에서 `paths` 를 통해 module import를 변경했을 경우 추가 
		"^@/(.*)$": "<rootDir>/$1",
	}
}
module.exports = createJestConfig(customJestConfig);
```

## 사용법

### package.json 에 추가
```
...
 "scripts": {
    "test": "jest --watch --passWithNoTests"
}
,..
```
### Test 파일 작성 예제
```javascript
import { padTo2Digits } from '@/snippet/function/utils';

describe('dd', () => {
	it('renders a heading', () => {
		expect(padTo2Digits(1)).toBe('01');
	});
});
```

## 참고
- [https://learn-react-test.vlpt.us/#/01-javascript-testing](https://learn-react-test.vlpt.us/#/01-javascript-testing)
- [https://velog.io/@leehyunho2001/Next.js-TypeScript-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-Jest%EC%99%80-testing-library-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0](https://velog.io/@leehyunho2001/Next.js-TypeScript-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-Jest%EC%99%80-testing-library-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
- [https://nextjs.org/docs/testing#jest-and-react-testing-library](https://nextjs.org/docs/testing#jest-and-react-testing-library)