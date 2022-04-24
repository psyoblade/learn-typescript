
// 인터페이스 확장(상속) 
interface Person {
    age: number;
    name: string;
}

type PersonType = {
    age: number;
    name: string;
}

interface Developer extends Person {
    language: string;
}

var u2: PersonType = { age: 20, name: 'kiki' }
var dev: Developer = { age: 30, name: 'suhyuk', language: 'java' }
console.log(dev)

// 타입 일리어스
var myname: string = 'suhyuk';
type StringType = string;
const yourName: StringType = 'kiki'

console.log(yourName)
