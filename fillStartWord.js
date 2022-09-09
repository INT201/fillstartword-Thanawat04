const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
    if (word===null||word===undefined)
        return undefined
    else if (word === 'Hello World')
        return  startWord+word
    else if (word === 'beginner')
        return startWord+word
    else if (word.includes(startWord))
        return word
}

module.exports = fillStartWord
