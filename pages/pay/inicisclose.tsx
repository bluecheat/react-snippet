import type { NextPage } from 'next';
import InicisClose from '../../snippet/pay/inicis/InicisClose';

const PayClosePage: NextPage = () => {


	return (
		<div className='App'>
			<span>주문이 취소 되었습니다.</span>
			<InicisClose />
		</div>
	);
};

export default PayClosePage;
