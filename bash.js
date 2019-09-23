const pwd = require('./pwd');

process.stdout.write("prompt > ");

process.stdin.on('data', (data) =>{
    const cmd = data.toString().trim();
    pwd(cmd);
    // if (cmd === 'pwd') {
    //   process.stdout.write(`${process.cwd()}`);
    //   process.stdout.write('\nprompt > ')
    // }
    // process.stdout.write('You typed: ' + cmd);
    // process.stdout.write('\nprompt > ')
})
