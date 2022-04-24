// Any 타입
function logMessage(value: any) {
    console.log(value)
}

// 유니온 타입 
function logUnionMessage(log: string | number) {
    console.log(log)
}
logUnionMessage("박수혁")
logUnionMessage(300)

type UnionType = string | number | boolean;
function logAllUnionMessage(log: UnionType) {
    if (typeof log == 'number')
        console.log('numeric: ' + log)
    else if (typeof log == 'string')
        console.log('string: ' + log)
    else if (typeof log == 'boolean')
        console.log('boolean: ' + log)
    else
        throw new TypeError('지원하지 않는 타입입니다');
}
logAllUnionMessage("박수혁")
logAllUnionMessage(300)
logAllUnionMessage(true)

var obj: any = { key: 1 }
// logAllUnionMessage(obj)

// 유니온 타입 - 하나의 타입의 특성을 유지하는 경우
interface Male {
    name: string;
    computer: boolean;
}
interface FeMale {
    name: string;
    flower: boolean;
}
function unionType(someone: Male | FeMale) {
    if ('computer' in someone) {
        var male = someone as Male
        console.log(someone.name + male.computer)
    }
    if ('flower' in someone) {
        var female = someone as FeMale
        console.log(someone.name + female.flower)
    }
}
unionType( {name: "수혁 ", computer: true})
unionType( {name: "키키 ", flower: false})


// 인터섹션 타입 - 여러 타입을 병합해서 통합된 타입을 새로 만드는 것
function intersectionType(who: Male & FeMale) {
    console.log("인터섹션타입 출력")
    console.log(who.name)
    console.log(who.computer)
    console.log(who.flower)
}

intersectionType({name: "수혁 ", computer: true, flower: false})
intersectionType({name: "키키 ", computer: false, flower: true})