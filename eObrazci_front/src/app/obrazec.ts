import { Izpit } from "./izpit";

export interface Obrazec {

    

    id: number;
    ime: string;
    priimek: string;
    imeUlice: string; 
    stevilkaUlice: number;
    postnaStevilka: number;
    kraj: string;
    drzava: string;
    spol: string;
    izpiti: Izpit[];

    

}