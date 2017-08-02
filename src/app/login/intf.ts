export interface Person {
    age: number;
    name: string;
}

export interface RootObject {
    people: Person[];
}

export class LocalPerson {
    age: number;
    name: string;
}
