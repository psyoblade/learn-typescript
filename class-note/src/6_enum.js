var Shoes;
(function (Shoes) {
    Shoes["Nike"] = "\uB098\uC774\uD0A4";
    Shoes["Adidas"] = "\uC544\uB514\uB2E4\uC2A4";
})(Shoes || (Shoes = {}));
var myShoes = Shoes.Nike;
console.log(myShoes);
var Answer;
(function (Answer) {
    Answer["YES"] = "\uC608";
    Answer["NO"] = "\uC544\uB2C8\uC624";
})(Answer || (Answer = {}));
function askQuestion(answer) {
    if (answer === Answer.YES) {
        console.log("정답입니다 ");
    }
    if (answer === Answer.NO) {
        console.log("오답입니다 ");
    }
}
askQuestion(Answer.YES);
askQuestion(Answer.NO);
