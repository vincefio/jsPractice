$(document).ready(() => {

    let game = {
        word: '',
        answerArray: [],
        guessString: '',
        guessesLeft: 12,
        // correctLetters: 0,
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

        handleKeyPress: function () {

            $(document).on('keyup', (e) => {
                //use regex to check if key pressed is a letter
                var input = String.fromCharCode(event.keyCode).toLowerCase()
                //var guessString = ''

                if (/^[a-zA-Z]+$/.test(input)) {
                    //if input is a letter we check to see if it is in answer array
                    if (this.answerArray.indexOf(input) == -1) {
                        //input has not already been guessed
                        this.guessString += input + '  '
                        this.answerArray.push(input)
                        this.updateGuessNumber()
                    } else {
                        //input has already been guessed
                        console.log(input + ' has already been guessed')
                    }
                    //if not we add it and update 
                } else {
                    console.log('input is not a letter')
                }

                //console.log(input)
                console.log(this.guessString)
                $('#usedLetters').empty().append('<p>' + this.guessString + '</p>')
                this.updateGuesses()
                this.guessListener()
                // this.winListener()
            })

        },

        //create function to update guesses div
        updateGuesses: function () {
            var wordSwitch = this.word.split('')
            var displayString = ''
            //console.log(wordSwitch)
            //create a string to display blank spaces to user
            for (var i = 0; i < wordSwitch.length; i++) {
                if (this.answerArray.indexOf(wordSwitch[i]) != -1) {
                    // console.log('letter ' + wordSwitch[i] + ' has been guessed')
                    displayString += wordSwitch[i] + ' '
                    //this.correctLetters += 1
                } else {
                    //  console.log('letter ' + wordSwitch[i] + ' has not been guess yet')
                    displayString += '_ '
                }
            }
            // console.log(displayString)

            $('#guesses').empty().append('<p>' + displayString + '</p>')
            // console.log('stringg length ' + displayString.length)
            //console.log('answer array length ' + this.answerArray.length)
            this.winListener(displayString)
        },

        updateGuessNumber: function () {
            //if the guessed letter is not in 

            this.guessesLeft -= 1;
            //console.log('updateGuessNumber hit ' + this.guessesLeft)
            $('#guessesLeft').empty().html(this.guessesLeft)


        },

        startGame: function () {
            //prompt user if they want to play, then start listener for guesses left
            if (confirm('Would you like to play Rock N Roll Hangman?')) {
                //alert('lets play mofo')
                game.randomWord()
                game.handleKeyPress()
                game.updateGuesses()
                // game.guessListener()

            } else {
                alert('Have a nice day!')
            }
        },

        guessListener: function () {
            if (this.guessesLeft === 0) {
                setTimeout(function () { alert("YOU LOSE"); }, 100);
                //this.startGame()
            }
        },

        winListener: function (string) {
            string = string.replace(/\s/g, '');
            console.log('string ' + string)
            // console.log('word length ' + this.word.lenth)
            //console.log('correct letters length ' + this.correctLetters)
            //check if work is equal to display string
            if (string == this.word && this.guessesLeft > 0) {
                setTimeout(function () { alert('YOU WIN!!!') }, 100)
                //this.startGame()
            }
        }
    }

    game.startGame()

})