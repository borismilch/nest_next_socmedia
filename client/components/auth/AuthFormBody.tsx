import React from 'react';
import {
	TextInput,
	PasswordInput,
	Text,
	Paper,
	Group,
	Button,
	Divider,
	Checkbox,
	Anchor,
} from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import { SocialProviders } from './';

interface AuthFormBodyProps {
	form: any;
	type: string;
	onSubmit: () => Promise<void>;
	toggleType: () => void;
}

const AuthFormBody: React.FC<AuthFormBodyProps> = (props) => {
	const { form, onSubmit, toggleType, type } = props;
	return (
		<Paper radius="md" p="xl" withBorder>
			<Text size="xl" align="center" weight={600}>
				Welcome to Mantine, {type} with
			</Text>

			<SocialProviders />

			<Divider
				label="Or continue with email"
				labelPosition="center"
				my="lg"
			/>

			<form onSubmit={form.onSubmit(onSubmit)}>
				<Group direction="column" grow>
					{type === 'register' && (
						<TextInput
							label="Name"
							placeholder="Your name"
							value={form.values.name}
							onChange={(event) =>
								form.setFieldValue('name', event.currentTarget.value)
							}
							error={form.errors.name && 'Invalid name'}
						/>
					)}

					<TextInput
						label="Email"
						placeholder="hello@mantine.dev"
						value={form.values.email}
						onChange={(event) =>
							form.setFieldValue('email', event.currentTarget.value)
						}
						error={form.errors.email && 'Invalid email'}
					/>

					<PasswordInput
						label="Password"
						placeholder="Your password"
						value={form.values.password}
						onChange={(event) =>
							form.setFieldValue(
								'password',
								event.currentTarget.value,
							)
						}
						error={
							form.errors.password &&
							'Password should include at least 6 characters'
						}
					/>

					{type === 'register' && (
						<Checkbox
							label="I accept terms and conditions"
							checked={form.values.terms}
							onChange={(event) =>
								form.setFieldValue(
									'terms',
									event.currentTarget.checked,
								)
							}
						/>
					)}
				</Group>

				<Group position="apart" mt="xl">
					<Anchor
						component="button"
						type="button"
						color="gray"
						onClick={() => toggleType()}
						size="xs"
					>
						{type === 'register'
							? 'Already have an account? Login'
							: "Don't have an account? Register"}
					</Anchor>
					<Button type="submit">{upperFirst(type)}</Button>
				</Group>
			</form>
		</Paper>
	);
};

export default AuthFormBody;
