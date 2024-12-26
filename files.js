// Interaction with files 
// const fs = require("fs")
const os = require("os")
console.log(os.cpus().length)

// fs.writeFileSync("samplefile.txt", "Yo this is sample file , do not change anything here.")


// fs.writeFile("samplefile.txt", "Yo this is Asynchronous sample file , do not change anything here.", (err) => {})

// const result = fs.readFileSync("contacts.txt", "utf-8")
// console.log(result)

// fs.readFile("contacts.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });

// fs.appendFileSync("samplefile.txt", "\nHello There")

// fs.cpSync("contacts.txt", "copy.txt")

// fs.unlinkSync("copy.txt")