//File system library import
const fs = require('fs')

/*
// JS Object 
const book = {
    title :'Ego is the Enemy',
    author: 'Ryan Holiday'
}

//This allows conversion of object/array to string
const bookJSON = JSON.stringify(book)
console.log(bookJSON)

//This allows conversion of string to object
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)

//writing data to a file in file system
fs.writeFileSync('1-json.json', bookJSON)
*/

//Reading a file from filesystem
const dataBuffer = fs.readFileSync('1-json.json')

//Convert buffer data to String and parse using JSON.parse to convert into object
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)