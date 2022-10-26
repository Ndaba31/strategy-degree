import { Branch } from './Branch';

export interface Company {
	id: string;
	name: string;
	subsidiaries?: Company[];
	branches?: Branch[];
	motto?: string;
	mission?: string;
	vision?: string;
	logo?: string;
	strategy_start: Date;
	strategy_end: Date;
}
