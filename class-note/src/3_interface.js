var suhyuk = {
    age: 30,
    name: 'suhyuk'
};
console.log(suhyuk);
function getUser(user) {
    console.log(user.name);
}
getUser(suhyuk);
var sum = function (a, b) {
    var result = a + b;
    console.log(a + " + " + b + " = " + result);
    return result;
};
sum(1, 2);
var arr = ['a', 'b', 'c'];
arr[0];
var regex = {
    cssFile: /\.css$/,
    jsFile: /\.js$/
};
console.log(regex['cssFile']);
Object.keys(regex).forEach(function (key) { return console.log(key); });
var u1 = { age: 20, name: 'kiki' };
