import type { NextPage } from 'next';
import Head from 'next/head';

const IamPortPayPage: NextPage = (props) => {

	const { IMP } = window;
	IMP!.init(process.env.NEXT_PUBLIC_IAMPORT || 'sample');

	const handlePay = () => {
		IMP!.request_pay({
			pg: 'html5_inicis',
			pay_method: 'card',
			merchant_uid: 'mid_123456789',
			name: '테스트 결제',
			amount: 1000,
			buyer_email: 'sample@gmail.com',
			buyer_name: '홍길동',
			buyer_tel: '01088888888',
			buyer_addr: '서울시',
			buyer_postcode: '023456',
		}, result => {

		});
	};

	return (
		<div className='App'>
			<Head>
			</Head>
			<button onClick={() => handlePay()}>아임포트 결제</button>
		</div>
	);
};

export default IamPortPayPage;
