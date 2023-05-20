// const tick = document.getElementById("tick")
// const start = document.getElementById("start")
// const stopTick = document.getElementById("stop")



// let count = 0
// let intervalID
// start.addEventListener("click", () => {
//   intervalID = setInterval(function () {
//         count += 1
//         tick.textContent = count
//     },1000)
// })

// stopTick.addEventListener("click", () => {
//     clearInterval(intervalID)
// })


// SCROLL EVENTS

// window.addEventListener("scroll", () => {
//     const scrollHeight1 = window.scrollY
   
//     const scrollable = document.documentElement.scrollHeight - window.innerHeight
   
//     if (scrollable === Math.ceil(scrollHeight1)) {
//         alert('You reached the end of the page')
//     }

    

// })



// EVENT EMITTER
// Naturally imported for us
// const { on } = require("events")
// const { EventEmitter } = require("stream")

// const eventEmitter = require("events")
// const emitter = new eventEmitter()

// emitter.on("tab", () => {
//     console.log("Hey");
// })

// emitter.emit("tab")



// // EXAMPLE 2
// const eventEmitter = require("events")
// const emitter = new eventEmitter()

// emitter.on("tab", function firstname (name, weather){
//     console.log(`Hey, ${name}, today will be ${weather}`);
// })



// emitter.emit("tab", "Chijioke", "sunny")

// // EXAMPLE 3

// const eventEmitter = require("events")
// const emitter = new eventEmitter()

// emitter.on("tab", function firstname (name){
//     console.log(`Hey, ${name}`);
// })



// emitter.emit("tab", "Chijioke", "sunny")






// OBJECT ORIENTED PROGRAMMING (OOP)... FOR CLEARER UNDERSTANDING SEE VIDEOS BY NET-NINJA

// class User {
//     constructor (name, age){
//         this.name = name
//         this.age = age
//         this.score = 0
//     }


//     // Methods
//     signIn(){
//         console.log(this.name, "Just signed in");
//         return this
//     }

//     signOut(){
//         console.log(this.name, "Just signed out");
//         return this
//     }

//     method(){
//         this.score += 1
//         console.log(`${this.name}, Your new score: ${this.score}`);
//         return this
//     }
// }

// // Instantiating a fresh user from the class "User"

// const userOne = new User("Chijioke", 20)
// const userTwo = new User("jane", 30)

// console.log(userOne, userTwo);
// userOne.signIn().signOut().method()





// OLDER WAY OF DECLARING A CLASS USING PROTOTYPING METHODS

    // function User(email, age) {
    //     this.email = email
    //     this.age = age

    //     this.login = function () {
    //         console.log(this.email, 'Just signed in');
    //     }
    // }

    // const userOne = new User("Ceejay@gmail.com", 27)
    // const userTwo = new User("Seyi@gmail.com", 28)

    // console.log(userOne, userTwo);
    // userOne.login()














