import React, { useEffect, useRef, useState } from 'react';
import imageUploadPlugin, { AsyncImageUploadPromise } from './plugin/ImageUploadPlugin';

export interface CKEditorRef {
	CKEditor: any;
	ClassicEditor: any;
}

export interface EditorOptions {
	minHeight?: string;
	maxHeight?: string;
}

export interface EditorProp {
	initText?: string; // 초기 값
	onChange?: (event, text) => void; // 변경 이벤트
	onBlur?: (event, text) => void; // blur 이벤트
	onFocus?: (event, text) => void; // focus 이벤트
	fallback?: React.ReactElement; // 컴포넌트 로딩 fallback
	options?: EditorOptions;
	uploadHandler: (file: File) => Promise<AsyncImageUploadPromise>; // 에디터 내 이미지 업로드 시 처리 및 노출 handler
}

const Editor: React.FC<EditorProp> = ({
										  initText,
										  onChange,
										  onFocus,
										  onBlur,
										  uploadHandler,
										  fallback,
										  options,
									  }) => {
	const editorRef = useRef<CKEditorRef>();
	const [isLayoutReady, setIsLayoutReady] = useState(false);
	const [text, setText] = useState<string>(initText || '');
	const { CKEditor, ClassicEditor } = editorRef.current || {};

	// 에디터 로드
	useEffect(() => {
		editorRef.current = {
			CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
			ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
		};
		setIsLayoutReady(true);
	}, []);

	if (!isLayoutReady) {
		return fallback ? fallback : <>Loading..</>;
	}

	return (
		<>
			<CKEditor
				data={text}
				config={{
					extraPlugins: [imageUploadPlugin({
						uploadHandler,
					})],
				}}
				onChange={(event: any, editor: any) => {
					setText(editor.getData());
					onChange && onChange(event, editor.getData());
				}}
				onBlur={(event: any, editor: any) => {
					onBlur && onBlur(event, editor.getData());
				}}
				onFocus={(event: any, editor: any) => {
					onFocus && onFocus(event, editor.getData());
				}}
				onReady={(editor) => {
					// You can store the "editor" and use when it is needed.
					// console.log("Editor is ready to use!", editor);
					editor.editing.view.change((writer) => {
						if(options?.maxHeight) {
							writer.setStyle(
								'max-height',
								options?.maxHeight,
								editor.editing.view.document.getRoot(),
							);
						}
						if(options?.minHeight) {
							writer.setStyle(
								'min-height',
								options?.minHeight,
								editor.editing.view.document.getRoot(),
							);
						}
					});
				}}
				editor={ClassicEditor}
			/>
		</>
	);
};


export default Editor;

