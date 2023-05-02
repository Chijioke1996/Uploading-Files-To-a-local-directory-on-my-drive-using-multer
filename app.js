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












