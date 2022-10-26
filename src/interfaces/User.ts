import { Position } from './Position';

export interface User {
	id: string;
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	phone: string;
	residence: string;
	position: Position;
}
