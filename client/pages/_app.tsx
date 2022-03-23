import '../styles/index.css';
import type { AppProps } from 'next/app';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
	QueryClientProvider,
	QueryClient,
	Hydrate,
} from 'react-query';
import { NotificationsProvider } from '@mantine/notifications';
import { Provider } from 'react-redux';
import { store } from 'store/store';

export const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{
						colorScheme: 'dark',
					}}
				>
					<ColorSchemeProvider
						colorScheme="dark"
						toggleColorScheme={(theme) =>
							theme === 'dark' ? 'light' : 'dark'
						}
					>
						<NotificationsProvider>
							<Provider store={store}>
								<Component {...pageProps} />
							</Provider>
						</NotificationsProvider>
					</ColorSchemeProvider>
				</MantineProvider>
			</Hydrate>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default MyApp;
