function sayHi(name: string, age: number): string {
    return `Hi ${name}, your age is ${age}`;
}

const sayHello = (): number => { return 5 }

Aliaksandr Krasnou 11:37
const animals: string[] = ["Zebra", "Giraffe"];
const cars: Array<string> = ["BMW"];

animals.map((animal) => {
    return 4;
}).forEach((animal) => {
    const res = animal.endsWith('a');

    console.log(res); 
});
const animals: string[] = ["Zebra", "Giraffe"];
const cars: Array<string> = ["BMW"];

const numbers = animals.map((animal) => {
    return 4;
});

numbers.forEach((num) => {
    const res = num.toFixed().endsWith('a');

    console.log(res); 
});

type Person = {
    name: string; // required
    age: number; // required

    money?: number; // optional
}

const john: Person = {
    name: 'John',
    age: 19,
};

const mary: Person = {
    name: 'Mary',
    age: 43,
    money: 1000,
}

const people = [john, mary];

function sumMoney(people: Person[]): number {
    return people.reduce((prev, curr) => {
        prev += curr.money ? curr.money : 0;
        return prev;
    }, 0);
}

console.log(sumMoney(people));
type Person = {
    name: string; // required
    age: number; // required

    money?: number; // optional
}

const john: Person = {
    name: 'John',
    age: 19,
};

const mary: Person = {
    name: 'Mary',
    age: 43,
    money: 1000,
}

const people = [john, mary];

function sumMoney(people: Person[]): number {
    return people.reduce((prev, curr) => {
        if (curr.money) {
            prev += curr.money;
        } else {
            prev += 0;
        }
        
        return prev;
    }, 0);
}

console.log(sumMoney(people));

type Person = {
    name: string; // required
    age: number; // required

    job: string;
    money?: number; // optional
}

const john: Person = {
    name: 'John',
    age: 19,
    job: "Economist",
};

const mary: Person = {
    name: 'Mary',
    age: 43,
    job: "Woker",
    money: 1000,
}

const people = [john, mary];

function sumMoney(people: Person[]): number {
    return people.reduce((prev, curr) => {
        if (curr.money) {
            prev += curr.money;
        } else {
            prev += 0;
        }
        
        return prev;
    }, 0);
}

function findAllWorker(people: Person[]): Person[] {
    return people.filter((person) => person.job === 'Worker');
}

console.log(findAllWorker(people));
type Person = {
    name: string; // required
    age: number; // required

    job: "Economist" | "Worker" | "IT";
    money?: number; // optional
}

const john: Person = {
    name: 'John',
    age: 19,
    job: "IT",
};

const mary: Person = {
    name: 'Mary',
    age: 43,
    job: "Worker",
    money: 1000,
}

const people = [john, mary];

function sumMoney(people: Person[]): number {
    return people.reduce((prev, curr) => {
        if (curr.money) {
            prev += curr.money;
        } else {
            prev += 0;
        }
        
        return prev;
    }, 0);
}

function findAllWorker(people: Person[]): Person[] {
    return people.filter((person) => person.job === 'Worker');
}

console.log(findAllWorker(people));

enum Job {
    Economist,
    Worker,
    IT
}

type Person = {
    name: string; // required
    age: number; // required

    job: Job;
    money?: number; // optional
}

const john: Person = {
    name: 'John',
    age: 19,
    job: Job.Economist,
};

const mary: Person = {
    name: 'Mary',
    age: 43,
    job: Job.Worker,
    money: 1000,
}

const people = [john, mary];

function sumMoney(people: Person[]): number {
    return people.reduce((prev, curr) => {
        if (curr.money) {
            prev += curr.money;
        } else {
            prev += 0;
        }
        
        return prev;
    }, 0);
}

function findAllWorker(people: Person[]): Person[] {
    return people.filter((person) => person.job === Job.Worker);
}

console.log(findAllWorker(people));