class Member {
    public name: string;
    private age: number;
    protected log: string;
    readonly password: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// 리액트 예전문법
// class App extends React.Component {}

// 리액트 최신 문법
// function App() {
//     return <div>Hello World</div>
// }

// 뷰
// new Vue({
//     el: '',
//     setup() {
//     }
// })