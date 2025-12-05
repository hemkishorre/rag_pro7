// example.js

function sum(a, b) {
    return a + b;
}

class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, ${this.name}`;
    }
}

module.exports = { sum, User };
