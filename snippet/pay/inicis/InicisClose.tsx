import React, { useEffect } from 'react';

const InicisClose = () => {

	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://stgstdpay.inicis.com/stdjs/INIStdPay_close.js';
		document.head.appendChild(script);

		return () => {
			document.head.removeChild(script);
		};

	}, []);

	return (
		<></>
	);
};

export default InicisClose;