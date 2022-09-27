# CKEditor with nextjs


에디터 공식 사이트:  [https://ckeditor.com/docs/ckeditor5/latest/index.html](https://ckeditor.com/docs/ckeditor5/latest/index.html)

## 라이브러리 설치

```bash
yarn add @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic
```

## 사용법

Ckeditor의 경우 SSR을 지원하지 않는다라고 공식 문서에서 설명하고 있습니다.
따라서 Ckeditor의 경우 CSR 형태로 랜더링 되도록 내부에서 처리 로직을 넣어줘야 합니다.

1. 예제 파일 위치  - `pages/ckeditor.tsx`
2. 예제 컴포넌트 위치  - `snippet/ckeditor/Editor.tsx`
3. 샘플 코드
```javascript
<Editor initText={text}
        onChange={(newText) => setText(newText)}
        uploadHandler={(file) => new Promise(resolve => {
            // 에디터 내 이미지 업로드 시 처리 방식 
            // ex: 이미지 업로드 API 요청
            resolve({default: 'http://image'}) 
        })}
        fallback={<div>로딩중</div>}
/>
...
```
