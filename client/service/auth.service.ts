import axios from 'axios';
import { IUser } from 'models';
const api_url = 'http://localhost:5000/';
import cookie from 'js-cookie';

export interface LoginPayload {
	email: string;
	password: string;
}

export interface RegisterPayload extends LoginPayload {
	name: string;
	picture: string;
}

export default class AuthService {
	static async register(newUser: RegisterPayload) {
		const { data } = await axios.post(api_url + 'auth/register', {
			...newUser,
		});
		const userData = await axios.get(api_url + 'user/me', {
			headers: {
				Authorization: 'Bearer ' + data.acess_token,
			},
		});

		localStorage.setItem('authToken', data.acess_token);
		cookie.set('token', data.acess_token);

		return userData;
	}

	static async login(payload: LoginPayload) {
		const { data } = await axios.post(
			api_url + 'auth/login',
			payload,
		);

		const userData = await fetch(api_url + 'user/me', {
			headers: {
				Authorization: 'Bearer ' + data.acess_token,
			},
		});
		localStorage.setItem('authToken', data.acess_token);
		cookie.set('token', data.acess_token);

		return userData;
	}

	static async signWithProvider(
		profile: RegisterPayload,
	): Promise<IUser> {
		const { data: token } = await axios.post(
			api_url + 'auth/provider',
			{
				...profile,
			},
		);

		const userData = await axios.get(api_url + 'user/me', {
			headers: {
				Authorization: 'Bearer ' + token.acess_token,
			},
		});

		localStorage.setItem('authToken', token.acess_token);
		cookie.set('token', token.acess_token);

		return userData.data;
	}

	static async createRegisterPayload(
		form: any,
	): Promise<RegisterPayload> {
		const avatar = `https://avatars.dicebear.com/api/pixel-art-neutral/${form.values.name}.svg`;

		const newUser: RegisterPayload = {
			email: form.values.email,
			name: form.values.name,
			password: form.values.password,
			picture: avatar,
		};

		return newUser;
	}
	static async getCurrentUser() {
		const authToken = cookie.get('token');

		if (!authToken) {
			return null;
		}

		try {
			const { data } = await axios.get(api_url + 'user/me', {
				headers: {
					Authorization: 'Bearer ' + authToken,
				},
			});

			return data;
		} catch (e) {
			return null;
		}
	}

	static async createLoginPayload(
		email: string,
		password: string,
	): Promise<LoginPayload> {
		return { email, password };
	}
}
