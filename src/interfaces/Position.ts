import { Branch } from './Branch';

export interface Position {
	title: string;
	level: number;
	branch?: Branch;
}
