import { padTo2Digits } from '@/snippet/function/utils';

describe('test', () => {
	it('padTo2Digits success', () => {
		expect(padTo2Digits(1)).toBe('01');
	});
});