const fs = require('fs')
function ls(input){
    if(input === "ls"){
    fs.readdir('./', 'utf8', (err, files) => {
        if(err){
            throw err
        } else{
            process.stdout.write(files.join('\n'))
            process.stdout.write('prompt > ');
        }
    })
}
}

module.exports = ls