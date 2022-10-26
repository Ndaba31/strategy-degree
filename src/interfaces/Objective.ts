import { DeliveryTimeline } from './DeliveryTimeline';
import { User } from './User';

export interface Objective {
	activity: string;
	kpi: string;
	target: string;
	responsibility: User;
	cost?: number;
	timelines: DeliveryTimeline[];
}
