
export class Chart {
	id: String;
	data: Object;
	

	constructor (config: Object) {
		this.id = config.id;
		this.data = config.data;
	}
}