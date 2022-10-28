import { render } from '@testing-library/react';
import Counter from 'pages/example/counter';


describe('<Counter / > test', () => {
	it('matches snapshopt', () => {
		const component = render(<Counter / >);
		expect(component.container).toMatchSnapshot(); // snapshot match
	});

	it('counter increments and decrements when the buttons are clicked', () => {
		const {container} = render(<Counter />)
		const [increment, decrement] = container.querySelectorAll('button')
		const message = container.firstChild.querySelector('h2')

		expect(message.textContent).toBe('0')
		fireEvent.click(increment)
		expect(message.textContent).toBe('1')
		fireEvent.click(decrement)
		expect(message.textContent).toBe('0')
	})
});