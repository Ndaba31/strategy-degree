import { Objective } from './Objective';

export interface Risk {
	objective: Objective;
	activity: string;
	risk_factors: string[];
	occurrence: string;
	impact: string;
	risk_rating: string;
	mitigation: string;
}
