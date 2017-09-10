import { Item } from './item.model';

export class Project {
	name: string;
	items: Array<Item>;
	markup: number;
	hardwareCost: number;
	labourCost: number;
	sandingCost: number;
	sundries: number;
	totalItemsCost: number;
	totalCost: number;
	
	constructor() {
		this.items = [];
	}
}