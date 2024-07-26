user= require('os')
// console.log('Uptime', user.uptime())

// http = require('http')
// console.log(http)

fs = require('fs')

console.log('starting work')
fs.readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err){
        console.log(err)
        return
    } 

   fs.writeFile('./content/first.txt', "this is the data and this too", 'utf8', (err) => {
    if (err){
        console.log(err)
        return
    }
    console.log('end of work')
   })
       
})

console.log('middle')