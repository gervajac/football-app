export interface Player {
    id: string;
    name: string;
    nacionality: string;
    position: string;
    image: string;
    goals:number;
    asists:number;
    team: string;
    favourite: boolean;
}

export interface User {
    token: string;
}