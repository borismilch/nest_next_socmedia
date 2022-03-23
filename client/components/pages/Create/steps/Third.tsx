import { Button } from '@mantine/core';
import React from 'react';
import { FormHeader } from '../';
import { Home2 } from 'tabler-icons-react';
import { useNavigation } from 'hooks';

const Third = () => {
	const { carryRouter } = useNavigation();
	return (
		<div
			style={{
				marginBottom: 30,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				gap: 20,
				flexDirection: 'column',
			}}
		>
			<div>
				<FormHeader
					title="Thank you for activity"
					description="Have a nice day"
				/>
			</div>

			<Button
				size="md"
				radius={'xl'}
				onClick={carryRouter('/')}
				rightIcon={<Home2 size={19} />}
			>
				Back home
			</Button>
		</div>
	);
};

export default Third;
