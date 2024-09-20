const fs = require("fs");

// for writting...........
//Sync.. call
// fs.writeFileSync('./test.txt','Hey threre!');

// fs.writeFile("./test.txt","Hello World Async",(err)=>{});

//for reading.......

//readFileSync it will return data
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

//it will not return
// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(result);
//   }
// });


//-------------->>>>  append
// fs.appendFileSync("./contact.txt", `\n${Date.now()} Hey there!`)



//----------->>>>>>> COPY File and many more to explore!
fs.copyFileSync("./contact.txt","./test.txt");
