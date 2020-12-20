//@ts-check

/**
 * Person Object
 * @type {Object}
 */

 const person = {
    id: 1,
    fistName: "Josué",
    lastname: "Miguel",
    age: 30
}

/**
 * Person2 is Object
 * @type {{id: number, fistName: string, lastName: string, age: number}}
 */

 const person2 = {
    id: 1,
    fistName: "Josué",
    lastName: "Miguel",
    age: 30
}

/**
 * Person3 is Object
 * @type {{ id: number | string, fistName: string, lastName: string, age: number | string }}
 */

 const person3 = {
    id: 1,
    fistName: "Josué",
    lastName: "Miguel",
    age: 30
}
