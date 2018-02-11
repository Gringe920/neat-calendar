var fs = require("fs");
var path = require("path");
var root = path.join(__dirname, 'src/bundle/'); 

export function readDirSync(path){  
    var pa = fs.readdirSync(path);  
    pa.forEach(function(ele,index){    
        return ele;    
    });
};