//for appendfile

// var http=require('http');
// var fs=require('fs');
// http.createServer((req,res)=>{
//     fs.appendFile('text.txt',"vamsi",(err,data)=>{
//         res.write(data);
//         res.end();
//         console.log("server running....")
//     })
// }).listen(8066)


//for readfile

// var http=require('http');
// var fs=require('fs');
// http.createServer((req,res)=>{
//     fs.readFile('text.json',(err,data)=>{
//     res.write(data);
//     res.end();
//     console.log("server running...")
// })
// }).listen(8080)



//for writefile

var http=require('http');
var fs=require('fs');
http.createServer((req,res)=>{
    fs.writeFile('text.html','nodejs...',(err,data)=>{
    res.write(data);
    res.end();
    console.log("server running...")
})
}).listen(8067)

//for delete a file

// var http=require('http');
// var fs=require('fs');
// http.createServer((req,res)=>{
//     fs.unlink('text.txt',(err)=>{
//     if(err) throw err;
//     console.log("server running...")
// })
// }).listen(8085)