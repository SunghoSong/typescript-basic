/*
* type-assertion
* super type, sub type
*/
type User = {
    name: string,
    age: number,
}

let user = {} as User
user.name = "sungho"
user.age = 29

type Dog = {
    name: string,
    color: string,
}

let dog = {
    name: "현승이",
    color: "white",
    breed: "스피츠",
} as Dog


//super type
let num1 = 10 as never
//sub type
let num2 = 10 as unknown

let num3 = 10 as unknown as string


/*
* const assertion
*/
let num4 = 10 as const

/*
* Non Null assertion
*/
type Post = {
    title: string,
    author?: string,
}

let post: Post = {
    title: "게시글",
    author: "sho",
}

// optional chaining
// post.author! <- null, undefined
const len: number = post.author!.length