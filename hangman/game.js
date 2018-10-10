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
            },
            {
                title: 'jessica',
                hint: 'The Allman Brothers most famous instrumental...Named after a woman'
            },
            {
                title: 'blackbird',
                hint: 'Song by The Beatles named after a bird'
            }
        ],


        randomWord: function () {
            $('#hint').empty()
            //create random number between 0 and 4
            var randNum = Math.floor(Math.random() * 5)
            this.word = this.guessWords[randNum].title

            console.log('CURRENT WORD IS ' + this.word.toUpperCase())
            console.log('-------------------------------')
            $('#hint').append('<h3>Hint: ' + this.guessWords[randNum].hint + '</h3>')

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

                $('#usedLetters').empty().append('<p>' + this.guessString + '</p>')

                this.updateGuesses()
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

            $('#guesses').empty().append('<p>' + displayString + '</p>')
            //console.log('answer array length ' + this.answerArray.length)
            this.winListener(displayString)
        },

        updateGuessNumber: function () {
            this.guessesLeft -= 1;
            //console.log('updateGuessNumber hit ' + this.guessesLeft)
            $('#guessesLeft').empty().html(this.guessesLeft)


        },

        startGame: function () {
            //prompt user if they want to play, then start listener for guesses left
            if (confirm('Would you like to play Rock N Roll Hangman?')) {
                this.word = '',
                    this.answerArray = [],
                    this.guessString = '',
                    this.guessesLeft = 12
                $('#usedLetters').empty()
                $('#guessesLeft').empty()

                game.randomWord()
                game.handleKeyPress()
                game.updateGuesses()

            } else {
                alert('Have a nice day!')
            }
        },


        winListener: function (string) {
            // var bool = false
            string = string.replace(/\s/g, '');
            console.log('string ' + string)

            //check if work is equal to display string
            if (this.guessesLeft === 0 && string != this.word) {
                setTimeout(function () { alert("YOU LOSE"); }, 50);
                setTimeout(function () { game.startGame() }, 100)
                //setTimeout(function () { this.startGame() }, 150)
            }
            if (string == this.word && this.guessesLeft > 0) {
                //alert('you win')
                setTimeout(function () { alert('YOU WIN!!!') }, 50)
                setTimeout(function () { game.startGame() }, 100)
            }

        }
    }

    game.startGame()

})