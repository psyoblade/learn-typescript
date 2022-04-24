enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes = Shoes.Nike;
console.log(myShoes)

enum Answer {
    YES = '예',
    NO = '아니오'
}

function askQuestion(answer: Answer) {
    if (answer === Answer.YES) {
        console.log("정답입니다 ")
    } 
    if (answer === Answer.NO) {
        console.log("오답입니다 ")
    } 
}

askQuestion(Answer.YES)
askQuestion(Answer.NO)