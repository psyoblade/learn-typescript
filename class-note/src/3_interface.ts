// 객체 인터페이스
interface User {
    age: number;
    name: string;
}

var suhyuk: User = {
    age: 30,
    name: 'suhyuk'
}

console.log(suhyuk)

function getUser(user: User) {
    console.log(user.name);
}

getUser(suhyuk)


// 함수 인터페이스
interface FuncSum {
    (a: number, b: number): number
}

var sum: FuncSum = function(a: number, b: number) {
    var result = a + b;
    console.log(a + " + " + b + " = " + result)
    return result;
}

sum(1, 2)


// 인덱스 인터페이스
interface StringArray {
    [index: number]: string
}

var arr: StringArray = ['a', 'b', 'c'];
arr[0];


// 딕셔너리 인터페이스
interface StringRegexDictionary {
    [key: string]: RegExp
}

var regex: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

console.log(regex['cssFile'])
Object.keys(regex).forEach(key => console.log(key))


// 인터페이스 확장(상속) 
interface Person {
    age: number;
    name: string;
}

var u1: Person = { age: 20, name: 'kiki' }