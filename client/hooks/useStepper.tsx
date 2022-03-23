import React, { useState } from 'react';

const useStepper = () => {
	const [active, setActive] = useState(0);

	const nextStep = () =>
		setActive((current) => (current < 3 ? current + 1 : current));
	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current));

	return { active, prevStep, nextStep };
};

export default useStepper;
