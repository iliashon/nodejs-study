const fs = require('fs')

const obj = {
  firstName: "Ilya",
  lastName: "Tupalski",
  email: "itupalski@gmail.com",
  age: 19,
}

fs.writeFile('./object.json', JSON.stringify(obj), (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log("Done")
    fs.readFile('object.json', (err, data) => {
      if(err) {
        console.log(err)
      } else {
        const jsonData = JSON.parse(data)
        const newData = {...jsonData, phone: "995593645045"}


        fs.writeFile('./object.json', JSON.stringify(newData), (err) => {
          if(err) {
            console.log(err)
          } else {
            console.log("appended file")
          }
        })
      }
    })
  }
})



