import { Player, Countries } from './player';

export interface Team {
    $key?: string;
    name: string;
    country: Countries;
    players: Player[];
}