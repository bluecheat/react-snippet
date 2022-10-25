import { useForm } from 'react-hook-form';
import HookInput from '@/snippet/form/HookInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type SampleForm = {
	id: string;
	name: string;
};

const schema = yup.object({
	id: yup.string().required(),
	name: yup.string().required(),
}).required();

export default function ReactHookFormExample() {
	const { register, handleSubmit, formState: { errors } } = useForm<SampleForm>({
		resolver: yupResolver(schema),
	});
	const onSubmit = data => console.log(data);
	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<form onSubmit={handleSubmit(onSubmit)}>
			<HookInput label={'이름'} name={'name'} required register={register} errors={errors} />
			{/* register your input into the hook by invoking the "register" function */}
			<HookInput label={'아이디'} name={'id'} required register={register} errors={errors} />
			<input type='submit' />
		</form>
	);
}
