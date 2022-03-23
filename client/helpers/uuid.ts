const uuid = () => `
${Date.now().toString()}-
${Math.random().toString(36).substring(2, 12)}-
${Date.now().toString()}
`;

export default uuid;
