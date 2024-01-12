// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

setTimeout(() => console.log("Timeout"), 0)

// not optimizing
function  fib(n) {
  return  new Promise((resolve, reject) => {
    if(n === 0 || n === 1) {
      return  resolve(n)
    }
    setImmediate(() => {
      Promise.all([fib(n -1), fib(n - 2)])
        .then(([fib1, fib2]) => resolve(fib1 + fib2))
    })
  })
}

// heap out of memory
fib(20).then((res) => console.log(res))
