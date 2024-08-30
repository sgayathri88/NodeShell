const runPwdCmd = require('./pwd');
const lsCmd = require('./ls')
const catCmd = require('./cat')
const curlCmd = require('./curl')

require('./pwd.js')

// Output a prompt
process.stdout.write('prompt > ')

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const inputs = data.toString().trim().split(' ');
  const cmd = inputs[0]

  process.stdout.write('You typed: ' + cmd);

  if (cmd === 'pwd') {
    runPwdCmd()
  } else if (cmd === 'ls') {
    lsCmd()
  } else if (cmd === 'cat') {
    catCmd(inputs[1])
  } else if (cmd === 'curl') {
    curlCmd(inputs[1])
  }
})
