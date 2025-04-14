"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function unKnownEx() {
    // up casting
    let a = 1;
    let b = "sungho";
    let c = true;
    let d = null;
    let e = undefined;
    let unKnownVar;
    // down casting
    // let num: number = unKnownVar;
}
function neverEx() {
    function neverFunc() {
        while (true) { }
    }
    //up casting
    let num = neverFunc();
    let str = neverFunc();
    let bool = neverFunc();
    //down casting
    // let never1: never = num;
}
function voidEx() {
    function voidFunc() {
        console.log("voidEx");
        return undefined;
    }
    let voidVar = undefined;
}
function any() {
    let unKnownVar;
    let anyVar;
    let undefinedVar;
    anyVar = unKnownVar;
    undefinedVar = anyVar;
    // let neverVar: never = anyVar;
}
