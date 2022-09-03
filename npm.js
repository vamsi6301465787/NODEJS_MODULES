// cmd npm i upper-case 


var http=require('http');
var uc=require('upper-case');
http.createServer((req,res)=>{
    res.write(uc.upperCase('hello'));
    res.end();
    console.log("server running..")

}).listen(8087)