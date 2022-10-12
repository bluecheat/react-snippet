import { RequestPayParams, RequestPayResponse } from '@/snippet/pay/iamport/types';


export const IamportInit = (accountId: string) => {
	const { IMP } = window;
	IMP!.init(accountId);
}

export const IamportRequest = (params: RequestPayParams): Promise<RequestPayResponse> => {
	const { IMP } = window;
	return new Promise<RequestPayResponse>((res) => {
		IMP!.request_pay(params, result => {
			res(result)
		});
	})
};