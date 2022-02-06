function pwd(input, print) {
    print(process.cwd())
}

function date(input, print){
    print(Date())
}

module.exports = {
    pwd,
    date
}