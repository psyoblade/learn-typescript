// Any 타입
function logMessage(value) {
    console.log(value);
}
// 유니온 타입 
function logUnionMessage(log) {
    console.log(log);
}
logUnionMessage("박수혁");
logUnionMessage(300);
function logAllUnionMessage(log) {
    if (typeof log == 'number')
        console.log('numeric: ' + log);
    else if (typeof log == 'string')
        console.log('string: ' + log);
    else if (typeof log == 'boolean')
        console.log('boolean: ' + log);
    else
        throw new TypeError('지원하지 않는 타입입니다');
}
logAllUnionMessage("박수혁");
logAllUnionMessage(300);
logAllUnionMessage(true);
var obj = { key: 1 };
function unionType(someone) {
    if ('computer' in someone) {
        var male = someone;
        console.log(someone.name + male.computer);
    }
    if ('flower' in someone) {
        var female = someone;
        console.log(someone.name + female.flower);
    }
}
unionType({ name: "수혁 ", computer: true });
unionType({ name: "키키 ", flower: false });
// 인터섹션 타입 - 여러 타입을 병합해서 통합된 타입을 새로 만드는 것
function intersectionType(who) {
    console.log("인터섹션타입 출력");
    console.log(who.name);
    console.log(who.computer);
    console.log(who.flower);
}
intersectionType({ name: "수혁 ", computer: true, flower: false });
intersectionType({ name: "키키 ", computer: false, flower: true });
