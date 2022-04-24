let arr = [
    { gender: 'male', name: 'suhyuk'},
    { gender: 'female', name: 'youngmi'},
    { gender: 'male', name: 'sean'},
]

let filtered = arr.filter(function(item) {
    if (item.gender == 'male') 
        return item;
})

console.log(filtered)