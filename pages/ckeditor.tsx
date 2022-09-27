import type { NextPage } from 'next';
import styles from '../styles/Editor.module.css';
import Editor from '../snippet/ckeditor/Editor';
import { useState } from 'react';

const Ckeditor: NextPage = () => {

	const [text, setText] = useState<string>('초기 데이터 입니다.');

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>
					CK Editor Code Snippet
				</h1>

				<p className={styles.description}>
					아래는 샘플 코드 입니다.
				</p>

				{/* 적용 코드 */}
				<Editor initText={text}
						onChange={(newText) => setText(newText)}
						uploadHandler={(file) => new Promise(resolve => {
							resolve({ default: 'http://image' });
						})}
						options={{
							minHeight: '200px', // default: inline
							maxHeight: '500px', // default: infinite
						}}
						fallback={<div>로딩중...</div>}
				/>
			</main>
		</div>
	);
};

export default Ckeditor;
