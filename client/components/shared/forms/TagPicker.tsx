import React from 'react';
import { MultiSelect } from '@mantine/core';
import { useState } from 'react';

interface TagPickerProps {
	label: string;
	placeholder: string;
	setTags: (val: string[]) => void;
}

const TagPicker: React.FC<TagPickerProps> = (props) => {
	const { label, placeholder, setTags } = props;

	const [data] = useState([
		'JavaScript',
		'React',
		'Angular',
		'Vue',
		'Svelte',
	]);

	return (
		<MultiSelect
			label={label}
			placeholder={placeholder}
			data={data}
			searchable
			creatable
			maxSelectedValues={3}
			clearable
			onChange={setTags}
			getCreateLabel={(query) => `+ Create ${query}`}
			nothingFound="Nothing found..."
		/>
	);
};

export default TagPicker;
