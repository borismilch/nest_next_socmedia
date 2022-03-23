import { IPost } from 'models';
import { fakeUser } from './fakeUsers';

const fakePosts: IPost[] = [
	{
		createdAt: Date.now(),
		updatedAt: Date.now(),
		author: fakeUser,
		body: 'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.',
		image:
			'https://www.reuters.com/resizer/LM1BvFY0Nqh3qrZGwULT-uz25h4=/1080x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FQQNKAZA4NPRPH2FVUGEETQDDE.jpg',
		title:
			'Started new Operation with ambition to give ukrainian peoples peace and freeedom',
		comments: [],
		tags: ['policts'],
	},
	{
		createdAt: Date.now(),
		updatedAt: Date.now(),
		author: fakeUser,
		body: 'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.',
		image:
			'https://www.lragir.am/ru/wp-content/uploads/sites/3/2020/08/lav-2.jpg',
		title:
			'Started new Operation with ambition to give ukrainian peoples peace and freeedom',
		comments: [],
		tags: ['politics'],
	},
	{
		createdAt: Date.now(),
		updatedAt: Date.now(),
		author: fakeUser,
		body: 'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.',
		image:
			'https://gdb.rferl.org/87dd7452-a10d-4a6a-b57f-8fd54e0d8f60_cx0_cy10_cw0_w408_r1_s.jpg',
		title:
			'Started new Operation with ambition to give ukrainian peoples peace and freeedom',
		comments: [],
		tags: ['politics'],
	},
];

export const [fakePost] = fakePosts;

export default fakePosts;
