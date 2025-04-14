/*First - Primitive Type - 하나의 값만 저장하는 타입*/
// type 명시 = type annotation(주석)
// number
var num1 = 123;
var num2 = -123;
var num3 = 0.123;
var num4 = -0.123;
var num5 = Infinity;
var num6 = -Infinity;
var num7 = NaN;
// string
var str1 = "hello";
var str2 = 'hello';
var str3 = "hello";
var str4 = "hello ".concat(num1);
// boolean
var bool1 = true;
var bool2 = false;
// null
var null1 = null;
// undefined
var unde1 = undefined;
// literal
var numA = 10;
var strA = "hello";
var boolL = false;
/*Second - array, tupel*/
// array
var numArr = [1, 2, 3];
var strArr = ["ts", "basic", "sho"];
var boolArr = [true, false, true];
var multiArr = [1, "hello"];
var doubleArr = [
    [1, 2, 3],
    [4, 5]
];
// tuple (fixed-type, length array)
var tup1 = [1, 2];
var tup2 = [1, "2", true];
//Prevent incorrect value entry
var users = [
    ["송성호", 1],
    ["이오영", 3],
];
/*Third - object*/
// java, c 언어는 명목적 타입 시스템 <-> typescript는 구조적 타입 시스템
//Property type system
var user = {
    id: 951031,
    name: "sungho"
};
var dog = {
    name: "물개강아지",
    color: "brown",
};
var config = {
    apiKey: "API KEY",
};
var userInfo = {
    id: 1,
    name: "sungho",
    nickname: "sho",
    birth: "1995.10.31",
    bio: "...",
    location: "163b",
};
var countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
var countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};
/*Sixth - Enumberable Type(enum)*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var user1 = {
    name: "sungho",
    role: Role.ADMIN,
};
console.log("user1", user1);
