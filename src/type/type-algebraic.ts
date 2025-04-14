/*
* Union Type
*/
let a: string | number;
a = 1
a = "union type"

let arr: (number | string | boolean)[] = [1, "hello", true]

type Dog = {
    name: string,
    color: string,
}

type User = {
    name: string,
    language: string,
}

type Union1 = Dog | User


// Dog object
let union1: Union1 = {
    name: "",
    color: "",
}

// User object
let union2: Union1 = {
    name: "",
    language: "",
}

// Dog&User object
let union3: Union1 = {
    name: "",
    color: "",
    language: "",
}

// let union4: Union1 = {
//     name: "",
// }


/*
* Intersection Type
*/
type Intersection = Dog & User

let intersection1: Intersection = {
    name: "",
    color: "",
    language: "",
}