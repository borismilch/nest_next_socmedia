import { IComment } from 'models';
import { fakeUser } from './fakeUsers';
import { fakePost } from './fakePosts';

export const fakeComments: IComment[] = [
	{
		createdAt: Date.now(),
		updatedAt: Date.now(),
		author: fakeUser,
		body: 'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell.',
		postId: 1,
		userId: 2,
		post: fakePost,
	},

	{
		createdAt: Date.now(),
		updatedAt: Date.now(),
		author: fakeUser,
		body: 'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell.',
		postId: 1,
		userId: 2,
		post: fakePost,
	},

	{
		createdAt: Date.now(),
		updatedAt: Date.now(),
		author: fakeUser,
		body: 'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell.',
		postId: 1,
		userId: 2,
		post: fakePost,
	},

	{
		createdAt: Date.now(),
		updatedAt: Date.now(),
		author: fakeUser,
		body: 'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell.',
		postId: 1,
		userId: 2,
		post: fakePost,
	},

	{
		createdAt: Date.now(),
		updatedAt: Date.now(),
		author: fakeUser,
		body: 'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell.',
		postId: 1,
		userId: 2,
		post: fakePost,
	},

	{
		createdAt: Date.now(),
		updatedAt: Date.now(),
		author: fakeUser,
		body: 'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell.',
		postId: 1,
		userId: 2,
		post: fakePost,
	},

	{
		createdAt: Date.now(),
		updatedAt: Date.now(),
		author: fakeUser,
		body: 'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell.',
		postId: 1,
		userId: 2,
		post: fakePost,
	},
];

export const [fakeComment] = fakeComments;
