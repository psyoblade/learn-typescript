// ES2015 (ES6) 자바 스크립트도 function Person(name, age) 와 동일한 Syntactic Sugar
class Person {
    /**
     * @param {string} name 
     * @param {number} age 
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('생성 되었습닌다')
    }
}

var suhyuk = new Person('박수혁', 30);
console.log(suhyuk)


// 모든 객체는 Object 객체를 상속 받아서 생성되며 __proto__ 를 통해 접근이 가능하다
// @ts-ignore
var obj = { a: 10 };
Object.keys
// obj.hasOwnProperty('a')