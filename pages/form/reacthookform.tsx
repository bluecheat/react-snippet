import { useForm } from 'react-hook-form';
import HookInput from '@/snippet/form/HookInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type SampleForm = {
	id: string;
	name: string;
	phone: number;
};

const schema = yup.object({
	id: yup.string().required('아이디는 필수 값입니다'),
	name: yup.string().required('이름은 필수 값입니다'),
	phone: yup.string().required('전화번호는 필수 값입니다').min(10, '길이가 맞지 않습니다 (최소 10글자)').max(11, '길이가 맞지 않습니다 (최대 11글자)'),
});

export default function ReactHookFormExample() {
	const { register, handleSubmit, formState: { errors } } = useForm<SampleForm>({
		resolver: yupResolver(schema),
	});
	const onSubmit = data => console.log(data);
	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<form onSubmit={handleSubmit(onSubmit)}>
			<HookInput type={'text'} label={'이름'} name={'name'} required register={register} errors={errors} />
			{/* register your input into the hook by invoking the "register" function */}
			<HookInput type={'text'} style={{
				border: '1px solid',
				padding: '10px',
				marginTop: '10px',
			}} label={'아이디'} name={'id'} required register={register} errors={errors} />
			<HookInput defaultValue={0} type={'number'} label={'전화번호'} name={'phone'} required register={register} errors={errors} />
			<input type='submit' />
		</form>
	);
}
