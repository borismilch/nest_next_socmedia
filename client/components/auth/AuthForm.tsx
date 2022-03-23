import React from 'react';
import { useForm, useToggle } from '@mantine/hooks';
import { AuthService } from 'service';
import { AuthFormBody } from './';
import { useContext } from 'react';
import { ModalContext, ModalContextProps } from 'providers';
import { LoadingOverlay } from '@mantine/core';
import { useAuthMutations } from 'hooks';

export default function AuthenticationForm() {
	const { close } = useContext<ModalContextProps>(ModalContext);
	const { loginMutaion, registerMutaion, isLoading } =
		useAuthMutations(close);

	const [type, toggleType] = useToggle('login', [
		'login',
		'register',
	]);

	const form = useForm({
		initialValues: {
			email: '',
			name: '',
			password: '',
			terms: true,
		},

		validationRules: {
			email: (val) => /^\S+@\S+$/.test(val),
			password: (val) => val.length >= 6,
			name: type === 'login' ? () => true : (val) => !!val.trim(),
		},
	});

	const register = async () => {
		const newUser = await AuthService.createRegisterPayload(form);
		registerMutaion.mutate(newUser);
	};

	const login = async () => {
		const credentials = await AuthService.createLoginPayload(
			form.values.email,
			form.values.password,
		);

		loginMutaion.mutate(credentials);
	};

	return (
		<>
			<LoadingOverlay visible={isLoading} />
			<AuthFormBody
				form={form}
				onSubmit={type === 'register' ? register : login}
				toggleType={toggleType}
				type={type}
			/>
		</>
	);
}
