# Suspense with nextjs

서버에서 비동기 로직을 통한 컴포넌트 랜더링을 제어할 수 있는 컴포넌트입니다.

## 필수 라이브러리 설치

```bash
yarn add react-error-boundary
```

## 사용법

비동기 데이터 호출을 통해 렌더링이 되는 부분을 `AsyncComponentBoundary` 컴포넌트로 감싸면 됩니다.

```javascript
- 
<AsyncComponentWrapper errorFallback={ErrorFallback} pendingFallback={<Skeleton/>}>
   <DataFetchComponent/>
</AsyncComponentWrapper>
```
