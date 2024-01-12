const fs = require('fs')
const dns = require('dns')

function info(text) {
  console.log(text, ` --- ${performance.now().toFixed(2)}`)
}

info("Program start")

// File write
fs.writeFile('./test.txt', 'Hello NodeJS', () => info("File written"))

// Timeouts
setTimeout(() => {
 info("Timeout 1")
}, 0)
setTimeout(() => {
  process.nextTick(() => info("Next tick 2"))
  info("Timeout 2")
}, 100)

// Interval
let intervalCount = 1
const interval = setInterval(() => {
  info(`Interval ${intervalCount}`)
  intervalCount++
  if(intervalCount === 3) clearInterval(interval)
}, 50)

// Promise
Promise.resolve().then(() => info("Promise 1"))

// NextTick
process.nextTick(() => info('Next tick 1'))

// Immediate
setImmediate(() => info("Immideate 1"))

// DNS query
dns.lookup('localhost', (err, address, family) => {
  info("DNS 1 localhost")
  Promise.resolve().then(() => info("Promise 2"))
  process.nextTick(() => info("Next tick 3"))
})

info("Program end")
