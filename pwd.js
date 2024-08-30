const runPwdCmd = () => {
  process.stdout.write('\n')
  process.stdout.write(process.cwd())
  process.stdout.write('\nprompt > ')
}

module.exports = runPwdCmd
