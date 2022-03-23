import React from 'react';
import { Menu, Text } from '@mantine/core';
import {
	Search,
	MessageCircle,
	Trash,
	Unlink,
	Pencil,
} from 'tabler-icons-react';

const HeaderMenu = () => {
	return (
		<Menu>
			<Menu.Item icon={<MessageCircle size={14} />}>Comment</Menu.Item>
			<Menu.Item icon={<Unlink size={14} />}>Copy Link</Menu.Item>
			<Menu.Item icon={<Pencil size={14} />}>Change</Menu.Item>

			<Menu.Item
				icon={<Search size={14} />}
				rightSection={
					<Text size="xs" color="dimmed">
						⌘K
					</Text>
				}
			>
				Search
			</Menu.Item>
			<Menu.Item color="red" icon={<Trash size={14} />}>
				Delete
			</Menu.Item>
		</Menu>
	);
};

export default HeaderMenu;
