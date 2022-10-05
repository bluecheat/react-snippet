import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import InicisPay, { InicisPayData } from '../../snippet/pay/inicis/InicisPay';
import MakeTimeStamp from '../../snippet/pay/utils/makeTimeStamp';
import { useRouter } from 'next/router';

const PayPage: NextPage = (props) => {

	const [isPurchase, setIsPurchase] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		console.log('props', props);
		console.log(router);
	}, [router]);

	const payData: InicisPayData = {
		productId: '0213sd',
		timestamp: MakeTimeStamp(),
		productName: '물건이름',
		buyerName: '홍길동',
		buyerTel: '01011112222',
		buyerEmail: 'test@test.com',
		productPrice: 1000,
		payStatus: 0,
		returnUrl: 'http://localhost:3000/api/inicisresult',
		closeUrl: 'http://localhost:3000/pay/inicisclose',
	};

	return (
		<div className='App'>
			<button onClick={() => setIsPurchase(true)}>결제</button>
			<InicisPay payData={payData} isPurchase={isPurchase} isTest />
		</div>
	);
};

export default PayPage;
