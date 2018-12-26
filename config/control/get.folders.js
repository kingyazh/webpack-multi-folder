const fs = require('fs');
const _path = require('path');
const root = _path.join(__dirname)

const readDir = async function(path){
    let dirArray = [];
    path = _path.join(root+'../../../src/');
    console.log(path)
	// fs.readdir(path,function(err,menu){
    
    // console.log('方法',dirArray)
    return await (function(dirArray){
        fs.readdir(path,function(err,menu){
            console.log('读文件',dirArray)
            dirArray = menu;
            if(!menu)
                return;
            menu.forEach(function(ele){
                fs.stat(path+'/'+ele,function(err,info){
                    // console.log(info.mtime);
                    // 文件夹
                    if(info.isDirectory()){
                        // console.log('dir: '+ele);
                        dirArray.push(ele);
                        
        console.log('遍历',dirArray)
                        // 递归读取文件夹下的所有文件夹和文件
                        // readDir(path+"/"+ele);
                    }
                    // 文件
                    // else{
                    // 	console.log("file: "+ele)
                    // }
                })
            })
        })
        console.log('方法',dirArray);
        return dirArray;
    })();
}

module.exports = readDir;