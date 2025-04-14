function unKnownEx(){
    // up casting
    let a: unknown = 1;
    let b: unknown = "sungho";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unKnownVar: unknown;

    // down casting
    // let num: number = unKnownVar;
}

function neverEx(){
    function neverFunc(): never{
        while(true){}
    }
    //up casting
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    //down casting
    // let never1: never = num;
}

function voidEx() {
    function voidFunc(): void{
        console.log("voidEx")
        return undefined;
    }
    let voidVar: void = undefined;
}

function any(): any{
    let unKnownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;

    anyVar = unKnownVar;

    undefinedVar = anyVar;

    // let neverVar: never = anyVar;
}