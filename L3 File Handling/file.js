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
// fs.copyFileSync("./contact.txt","./copy.txt");




//for deleting we use unlink
// fs.unlinkSync("./copy.txt");


// for checking status of file we can use statSync 
// console.log(fs.statSync("./test.txt"));
console.log(fs.statSync("./test.txt").isFile());  //it will check and return boolean values
// for more options fs._____




