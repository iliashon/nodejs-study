const {EventEmitter} = require("events")

const myEmitter = new EventEmitter()

const func = (secontQty) => {
  console.log(`Timeout event ${secontQty}`)
}

myEmitter.on("timeout", func)

setTimeout(() => {
  myEmitter.emit("timeout", 1)
}, 1000)

setTimeout(() => {
  myEmitter.emit("timeout", 2)
}, 2000)

myEmitter.once("singleEvent", () => {
  console.log("single event")
})

setTimeout(() => {
  myEmitter.emit("singleEvent", 2)
}, 500)

setTimeout(() => {
  myEmitter.emit("singleEvent", 2)
}, 1500)

setTimeout(() => {
  myEmitter.off("timeout", func)
}, 3000)

setTimeout(() => {
  myEmitter.emit("timeout", 3)
}, 4000)
