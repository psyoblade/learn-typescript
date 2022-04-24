function logAnyText(text) {
    console.log(text);
    return text;
}
logAnyText('안녕하세요');
logAnyText(100);
function logText(text) {
    console.log(text);
    return text;
}
logText('안녕하세요');
logText(100);
logText(true);
function logString(text) {
    var reversed = text.split('').reverse().join('');
    console.log(text + ' -> ' + reversed);
    return reversed;
}
logString('abcdefghijklmnopqrstuvwxyz');
function logTextLine(textlines) {
    console.log(textlines.length);
    return textlines.reverse().map(function (textline) { return textline; });
}
var result = logTextLine(['hello', 'world']);
result.forEach(function (text) { return console.log(text); });
function logTextLength(text) {
    console.log('length of "' + text + '" is ' + text.length);
    return text;
}
logTextLength('abc');
function getShoppingItemOption(key, item) {
    console.log(key, item);
    return item;
}
// getShoppingItemOption('햄버거');
// getShoppingItemOption(1234);
var suhyukPark = { firstName: "suhyuk", lastName: "park" };
getShoppingItemOption('name', suhyukPark);
