// for url
var url=require('url');
var adrs='http://localhost:8080/'
var v=url.parse(adrs,true);
console.log(v.host);