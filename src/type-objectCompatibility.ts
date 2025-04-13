type Animal = {
    name: string,
    color: string,
}

type Dog = {
    name: string,
    color: string,
    breed: string,
}

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "현승이",
    color: "brown",
    breed: "진도",
}

//up casting
animal = dog;

//down casting
// dog = animal;

type Book = {
    name: string,
    price: number,
};

type ProgrammingBook = {
    name: string,
    price: number,
    skill: string,
}

let book: Book;
let programmingBook: ProgrammingBook = {
    name: "book",
    price: 1031,
    skill: "typescript",
}
// up casting
book = programmingBook;
// down casting
// programmingBook = book;

let book2: Book = {
    name: "book2",
    price: 951031,
    // #Typescript Excess property check!
    // skill: "typescript"
}

function funcBook(book: Book){}
funcBook({
    name: "funcBook",
    price: 1031,
})