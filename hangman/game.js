$(document).ready(() => {

    let game = {
        word: '',

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
            console.log(this.word)
        }
    }

    console.log(game.randomWord())
    //console.log(game.word)
    game.updateGuesses()
})