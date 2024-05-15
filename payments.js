let bill =1000;
const payment =(pay) =>(pay*1.001)+3;
console.log(Math.round(payment(bill)))

/////////////////////////////////////////////

const greetingEdFriend = (name1, name2, name3) => `Welcome ${name1}, ${name2}, ${name3}.`;
console.log(greetingEdFriend('safe','ja','ji'));

/////////////////////////////////////////////
// let name = 'safe'
// console.log('greeting ' + name + 'how are you')
// console.log(`greeting ${name} how are you`)

const yourAge = birthYear =>  2024-birthYear
console.log(yourAge(1997))

/////////////////////////////////////////////

// Ed would like to create a function that prints out,
// `Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.`

const ageAndGreeting = function(name1, age1, name2, age2, name3, age3) {
    return console.log(`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`)
}

/////////////////////////////////////////////


const grading = function(grade){
    if(grade == 11){
        console.log("perfect")
    }else if (grade >= 8 ){
        console.log("Excellent")
    }else if(grade >= 5 ){
        console.log("passes")
    }else{console.log('failed')}
}

grading(11)
grading(8)
grading(5)
grading(3)