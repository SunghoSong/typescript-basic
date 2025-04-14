/*First - Primitive Type - 하나의 값만 저장하는 타입*/
// type 명시 = type annotation(주석)

// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// literal
let numA: 10 = 10;
let strA: "hello" = "hello";
let boolL: false = false;


/*Second - array, tupel*/

// array
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["ts", "basic", "sho"];
let boolArr: Array<boolean> = [true, false, true];
let multiArr: (number | string)[] = [1, "hello"];
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5]
]

// tuple (fixed-type, length array)
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

//Prevent incorrect value entry
const users: [string, number][] = [
    ["송성호", 1],
    ["이오영", 3],
]


/*Third - object*/

// java, c 언어는 명목적 타입 시스템 <-> typescript는 구조적 타입 시스템
//Property type system
let user: {
    //optional property
    id?: number;
    name: string;
} = {
    id: 951031,
    name: "sungho"
};

let dog:{
    name: string;
    color: string;
} ={
    name: "물개강아지",
    color: "brown",
}

let config: {
    readonly apiKey: string;
} = {
    apiKey: "API KEY",
};

/*Fourth - type alias*/
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let userInfo: User ={
    id: 1,
    name: "sungho",
    nickname: "sho",
    birth: "1995.10.31",
    bio: "...",
    location: "163b",
};

/*Fifth - index signature*/
type CountryCodes = {
    [key : string] : string;
}
let countryCodes : CountryCodes = {
    Korea : "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
}

type CountryNumberCodes = {
    [key : string] : number;
    UnitedState: number;
}

let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
}


/*Sixth - Enumberable Type(enum)*/
// convert = typescript -> javascript object
enum Role {
    ADMIN= 10,
    USER,
    GUEST,
}

enum Language {
    korean = "ko",
    english = "en",
}

const user1 = {
    name: "sungho",
    role: Role.ADMIN,
    language: Language.korean
}

console.log("user1", user1);


// any Type- 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar: any = 10;

// unknown Type
// let unKnownVar: unKnown;

let num: number = 100;
let unKnownVar: unknown;
unKnownVar = num;

if(typeof unKnownVar === "undefined") {
    num = unKnownVar;
}

//void
function func1(): string {
    return "sho";
}

function func2(): void{
    console.log(func1());
}

func2()

//never - 반환 불가능한 함수
function func3(): never{
    throw new Error()
}
