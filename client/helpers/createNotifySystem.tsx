import { useNotifications } from '@mantine/notifications';
export interface CreateMessagePayload {
	successMessage: string;
	successCaption?: string;
	errormessage: string;
}

const createNotifySystem = (
	message: CreateMessagePayload,
	callback: () => void,
) => {
	const notifications = useNotifications();
	return {
		onSuccess: () => {
			notifications.showNotification({
				color: 'green',
				title: message.successMessage,
				message: message.successCaption,
			});
			callback();
		},
		onError: (e: any) => {
			notifications.showNotification({
				color: 'red',
				title: message.errormessage,
				message: e.response.data.message,
			});
		},
	};
};

export default createNotifySystem;
