import { Grupo } from './grupo.model';
import { Sector } from './sector.model';

export class Contacto {
    name: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    grupo: Grupo;
    sector: Sector;
    aficiones: Array<any>;

    constructor() {
        this.aficiones = [];
    }
}
