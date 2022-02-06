const comando = require('./command/index')

const print = function(data){
    process.stdout.write(data)
    process.stdout.write('\nprompt > ')
}

process.stdout.write('\nprompt >')

process.stdin.on('data', data => {
    let input = data.toString().trim().split(' ')

    let cmd = input.shift()

    if(comando[cmd]){
        comando[cmd](input, print)
    } else {
        print('cmd no existe')
    }
})