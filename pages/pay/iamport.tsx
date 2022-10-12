import type { NextPage } from 'next';
import { IamportInit, IamportRequest } from '@/snippet/pay/iamport/utils';
import Script from 'next/script';

const IamPortPayPage: NextPage = (props) => {

	const handlePay = async () => {
		const result = await IamportRequest({
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
		});
		console.log(result);
	};

	return (
		<div className='App'>
			<Script src='https://code.jquery.com/jquery-1.12.4.min.js'></Script>
			{/*// Next에서는 SSR 시 window 객체가 존재 하지 않기 때문에 아래와 같이 처리해야 함*/}
			<Script src='https://cdn.iamport.kr/js/iamport.payment-1.2.0.js' onLoad={() => {
				IamportInit(process.env.NEXT_PUBLIC_IAMPORT!);
			}}></Script>
			<button onClick={() => handlePay()}>아임포트 결제</button>
		</div>
	);
};

export default IamPortPayPage;
