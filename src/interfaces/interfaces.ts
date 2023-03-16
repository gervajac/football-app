export interface Todo {
    id: string;
    desc: string;
    completed: boolean;
}

export interface TodoState {
    todoCount: number;
    todos: Todo [];
    completed: number;
    pending: number
}

export interface Player {
    id: number;
    name: string;
    nacionality: string;
    position: string;
    image: string;
    goals:number;
    asists:number;
}