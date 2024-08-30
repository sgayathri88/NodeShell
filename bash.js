const runPwdCmd = require('./pwd');
const lsCmd = require('./ls')
const catCmd = require('./cat')
const curlCmd = require('./curl')

// Done callback function
const done = output => {
  process.stdout.write('\n')
  process.stdout.write(output)
  process.stdout.write("\nprompt > ")
}

// Output a prompt
process.stdout.write('prompt > ')

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const inputs = data.toString().trim().split(' ');
  const cmd = inputs[0]

  process.stdout.write('You typed: ' + cmd);

  if (cmd === 'pwd') {
    runPwdCmd(done)
  } else if (cmd === 'ls') {
    lsCmd(done)
  } else if (cmd === 'cat') {
    catCmd(done, inputs[1])
  } else if (cmd === 'curl') {
    curlCmd(done, inputs[1])
  }
})
