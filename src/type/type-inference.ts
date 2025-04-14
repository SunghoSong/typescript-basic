/*
* interface
*/

let interf = {
    id: 1,
    name: "sho",
    profile: {
        nickname: "sungho",
    },
    urls: ["https://www.facebook.com/sungho"],
}

let {id, name, profile} = interf

let [one, two, three] = [1, "hello", true]

function func(message = "sungho"){
    return "sho"
}

let sungho

//any -> number
sungho = 10
sungho.toFixed()

//number -> string
sungho = "sho"
sungho.toUpperCase()

//literal Type
const shoNum = 10
const shoStr = "sho"

let arr = [1, "string"]