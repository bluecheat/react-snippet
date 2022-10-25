import { UseFormRegister } from 'react-hook-form/dist/types/form';
import React, { CSSProperties, InputHTMLAttributes } from 'react';
import { FieldErrors } from 'react-hook-form/dist/types/errors';

interface HookInputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
	register: UseFormRegister<any>;
	required?: boolean;
	errors?: FieldErrors;
	style?: CSSProperties,
}

const HookInput: React.FC<HookInputProps> = ({ register, style, name, label, required, errors, ...props }) => {

	console.log(errors, name);

	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input type={'text'} style={style} id={name} {...register(name, { required })} {...props} />
			{errors?.[name] && (
				<div className='help is-danger' role='alert'>
					{errors[name]?.message as string}
				</div>
			)}
		</div>
	);
};

export default HookInput;