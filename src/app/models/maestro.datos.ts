import { Grupo } from './grupo.model';
import { Sector } from './sector.model';
import { Aficion } from './aficiones.model';

export const GRUPOS: Array<Grupo> = [
    {id: 1, nombre: 'Familia',  descripción: ''}, 
    {id: 2, nombre: 'Amigos',  descripción: ''},
    {id: 3, nombre: 'Negocios',  descripción: ''},
    {id: 4, nombre: 'Trabajo',  descripción: ''},
    {id: 5, nombre: 'Otros',  descripción: ''},
];

export const SECTORES: Array<Sector> = [
    {id: 1, nombre: 'Tecnico',  descripción: ''},
    {id: 2, nombre: 'Creativo',  descripción: ''},
    {id: 3, nombre: 'Comercial',  descripción: ''},
    {id: 4, nombre: 'Otros',  descripción: ''},
];

export const AFICIONES: Array<Aficion> = [
    {id: 1, nombre: 'Lectura',  descripción: ''},
    {id: 2, nombre: 'Musica',  descripción: ''},
    {id: 3, nombre: 'Deporte',  descripción: ''},
    {id: 4, nombre: 'Viajar',  descripción: ''},
];
