function logAnyText(text: any) {
    console.log(text)
    return text;
}

logAnyText('안녕하세요')
logAnyText(100)

function logText<T>(text: T): T {
    console.log(text)
    return text;
}

logText<string>('안녕하세요')
logText(100)
logText(true)

function logString(text: string): string {
    var reversed = text.split('').reverse().join('');
    console.log(text + ' -> ' + reversed);
    return reversed;
}

logString('abcdefghijklmnopqrstuvwxyz')

function logTextLine<T>(textlines: T[]): T[] {
    console.log(textlines.length);
    return textlines.reverse().map(textline => textline);
}

var result: string[] = logTextLine<string>(['hello', 'world']);
result.forEach(text => console.log(text));


// 인터페이스 선언을 통해서 제너릭에 대한 필수 속성을 추가
interface LengthType {
    length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
    console.log('length of "' + text + '" is ' + text.length);
    return text;
}

logTextLength('abc');
// logTextLength(1234);


// keyof 예약어를 통한 제너릭 활용하기 - 선언한 키 값 가운데 하나만 사용할 수 있다
type NameType = { firstName: string; lastName: string };
type PriceType = { original: number; predium: number };
type StockType = { domestic: boolean; oversea: boolean }
interface ShoppingItem {
    name: NameType;
    price: PriceType;
    stock: StockType;
}

function getShoppingItemOption<T, K extends keyof ShoppingItem>(key: K, item: T): T {
    console.log(key, item);
    return item;
}

// getShoppingItemOption('햄버거');
// getShoppingItemOption(1234);
var suhyukPark: NameType = { firstName: "suhyuk", lastName: "park" } 
getShoppingItemOption('name', suhyukPark);