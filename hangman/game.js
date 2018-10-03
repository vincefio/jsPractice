$(document).ready(() => {

    let game = {
        word: '',
        answerArray: [],
        //declare words and their hints
        guessWords: [
            {
                title: 'testify',
                hint: 'Released by Rage Against The Machine in 1999...You do this in court'
            },
            {
                title: 'money',
                hint: 'Off Dark Side of the Moon by Pink Floyd...An everyday commodity'
            },
            {
                title: 'satisfaction',
                hint: 'The Rolling Stones First American Hit Single released in 1965'
            }/*,
            {
                title: 'cruisin'
                hint
            }*/
        ],


        randomWord: function () {
            //create random number between 0 and 3
            this.word = this.guessWords[Math.floor(Math.random() * 3)].title
            console.log('CURRENT WORD IS ' + this.word.toUpperCase())
            console.log('-------------------------------')
            return this.word
        },

        //create function to update guesses div
        updateGuesses: function () {
            var wordSwitch = this.word.split('')
            var displayString = ''
            console.log(wordSwitch)
            //create a string to display blank spaces to user
            for (var i = 0; i < wordSwitch.length; i++) {
                if (this.answerArray.indexOf(wordSwitch[i]) != -1) {
                    console.log('letter ' + wordSwitch[i] + ' has been guessed')
                } else {
                    console.log('letter ' + wordSwitch[i] + ' has not been guess yet')
                }
                /* for(var j = 0; j < this.answerArray.length){
                     if(answerArray[j] == wordSwitch[i])
                 }*/
            }
        }
    }

    console.log(game.randomWord().length)
    //console.log(game.word)
    game.updateGuesses()
})