"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let animal = {
    name: "기린",
    color: "yellow",
};
let dog = {
    name: "현승이",
    color: "brown",
    breed: "진도",
};
//up casting
animal = dog;
let book;
let programmingBook = {
    name: "book",
    price: 1031,
    skill: "typescript",
};
// up casting
book = programmingBook;
// down casting
// programmingBook = book;
let book2 = {
    name: "book2",
    price: 951031,
    // #Typescript Excess property check!
    // skill: "typescript"
};
function funcBook(book) { }
funcBook({
    name: "funcBook",
    price: 1031,
});
