export interface Stakeholder {
	name: string;
	relationship: string;
	expectations_from_company: string[];
	expectations_from_stakeholder: string[];
	external: boolean;
}
