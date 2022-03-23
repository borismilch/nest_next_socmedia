import { Button, ButtonProps } from '@mantine/core';
import { FacebookIcon } from 'assets/icons';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { useAuthMutations } from 'hooks';

interface FocabookLoginButtonProps {
	onClick: () => void;
}

const transformProfile = (profile: any) => {
	return { ...profile, picture: profile.picture.data.url };
};

const FacebookLoginButton: React.FC<FocabookLoginButtonProps> = ({
	onClick,
}) => {
	return (
		<Button
			radius={'xl'}
			onClick={onClick}
			leftIcon={<FacebookIcon />}
			fullWidth
			sx={(theme) => ({
				backgroundColor: '#4267B2',
				color: '#fff',
				width: '',
				'&:hover': {
					backgroundColor: theme.fn.darken('#4267B2', 0.1),
				},
			})}
		>
			Facebook
		</Button>
	);
};

interface FacebookButtonProps {
	onSuccessRequest: () => void;
}

export default function FacebookButton({
	onSuccessRequest,
}: FacebookButtonProps) {
	const { providerMutation } = useAuthMutations(onSuccessRequest);

	const onSuccess = (response: any) => {
		const profile = transformProfile(response.profileObj);

		providerMutation.mutate(profile);
	};

	return (
		<>
			<FacebookLogin
				appId="579379859831296"
				fields="name,email,picture"
				onFail={(error) => {
					console.log('Login Failed!', error);
				}}
				style={{
					borderRadius: '49px',
					width: '100%',
				}}
				onProfileSuccess={(res) => onSuccess(res)}
				render={({ onClick }) => (
					<FacebookLoginButton onClick={() => onClick && onClick()} />
				)}
			/>
		</>
	);
}
