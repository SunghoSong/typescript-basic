"use strict";
/*First - Primitive Type - 하나의 값만 저장하는 타입*/
// type 명시 = type annotation(주석)
Object.defineProperty(exports, "__esModule", { value: true });
// number
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// string
let str1 = "hello";
let str2 = 'hello';
let str3 = `hello`;
let str4 = `hello ${num1}`;
// boolean
let bool1 = true;
let bool2 = false;
// null
let null1 = null;
// undefined
let unde1 = undefined;
// literal
let numA = 10;
let strA = "hello";
let boolL = false;
/*Second - array, tupel*/
// array
let numArr = [1, 2, 3];
let strArr = ["ts", "basic", "sho"];
let boolArr = [true, false, true];
let multiArr = [1, "hello"];
let doubleArr = [
    [1, 2, 3],
    [4, 5]
];
// tuple (fixed-type, length array)
let tup1 = [1, 2];
let tup2 = [1, "2", true];
//Prevent incorrect value entry
const users = [
    ["송성호", 1],
    ["이오영", 3],
];
/*Third - object*/
// java, c 언어는 명목적 타입 시스템 <-> typescript는 구조적 타입 시스템
//Property type system
let user = {
    id: 951031,
    name: "sungho"
};
let dog = {
    name: "물개강아지",
    color: "brown",
};
let config = {
    apiKey: "API KEY",
};
let userInfo = {
    id: 1,
    name: "sungho",
    nickname: "sho",
    birth: "1995.10.31",
    bio: "...",
    location: "163b",
};
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};
/*Sixth - Enumberable Type(enum)*/
// convert = typescript -> javascript object
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 11] = "USER";
    Role[Role["GUEST"] = 12] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "sungho",
    role: Role.ADMIN,
    language: Language.korean
};
console.log("user1", user1);
// any Type- 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar = 10;
// unknown Type
// let unKnownVar: unKnown;
let num = 100;
let unKnownVar;
unKnownVar = num;
if (typeof unKnownVar === "undefined") {
    num = unKnownVar;
}
//void
function func1() {
    return "sho";
}
function func2() {
    console.log(func1());
}
func2();
//never - 반환 불가능한 함수
function func3() {
    throw new Error();
}
