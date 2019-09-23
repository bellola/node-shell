const pwd = require('./pwd');
const ls = require('./ls')
process.stdout.write("prompt > ");

process.stdin.on('data', (data) =>{
    const cmd = data.toString().trim();
    pwd(cmd);
    ls(cmd);
    // if (cmd === 'pwd') {
    //   process.stdout.write(`${process.cwd()}`);
    //   process.stdout.write('\nprompt > ')
    // }
    // process.stdout.write('You typed: ' + cmd);
    // process.stdout.write('\nprompt > ')
})
