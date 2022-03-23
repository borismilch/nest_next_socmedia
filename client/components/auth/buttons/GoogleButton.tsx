import { Button, ButtonProps } from '@mantine/core';
import { GoogleIcon } from 'assets/icons';
import { GoogleLogin } from 'react-google-login';
import { useRef } from 'react';
import { useAuthMutations } from 'hooks';

interface GoogleButtonProps extends ButtonProps<'button'> {
	onSuccessLogin: () => void;
}

interface RenderingGoogleButtonProps {
	onClick: () => void;
	disabled: boolean;
}

const RenderingGoogleButton: React.FC<RenderingGoogleButtonProps> = ({
	onClick,
	disabled,
}) => {
	return (
		<Button
			leftIcon={<GoogleIcon />}
			variant="default"
			color="gray"
			disabled={disabled}
			fullWidth
			onClick={onClick}
			radius="xl"
		>
			Google
		</Button>
	);
};

const GoogleButton: React.FC<GoogleButtonProps> = (props) => {
	const { onSuccessLogin } = props;

	const { providerMutation, transformProfile } =
		useAuthMutations(onSuccessLogin);

	const buttonRef = useRef<any>(null);
	const triggerClick = () => {
		buttonRef!.current.click();
	};

	const onSuccess = (response: any) => {
		const profile = transformProfile(response.profileObj);
		providerMutation.mutate(profile);
	};

	return (
		<>
			<GoogleLogin
				clientId="218145318868-4mq51mvgjt3mv4soc5aiar2hbkqmqdhn.apps.googleusercontent.com"
				buttonText="Login"
				ref={buttonRef}
				onSuccess={onSuccess}
				render={({ onClick, disabled }) => (
					<RenderingGoogleButton
						disabled={!!disabled}
						onClick={onClick}
					/>
				)}
				onFailure={(e) => {
					console.log(e);
				}}
				cookiePolicy={'single_host_origin'}
			/>
		</>
	);
};

export default GoogleButton;
