import { Canal } from "./canal";

export class Streamer {
	nickname: string;
	descripcion: string;
	redessociales: string;
	stream: Canal[]; 

	constructor(nickname: string, descripcion: string, redessociales: string, stream: string) {
		this.nickname = nickname;
		this.descripcion = descripcion;
		this.redessociales = redessociales;
		this.stream = [];
	}

	registrarCanal(canal: Canal) {
		this.stream.push(canal)
	}
}
