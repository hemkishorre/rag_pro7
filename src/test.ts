// example.ts

interface Person {
    name: string;
    age: number;
}

function getDetails(person: Person): string {
    return `${person.name} is ${person.age} years old.`;
}

class Counter {
    private value: number = 0;

    increment() {
        this.value += 1;
        return this.value;
    }
}

export { Person, getDetails, Counter };
