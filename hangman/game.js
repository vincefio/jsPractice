$(document).ready(() => {

    let game = {
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
            }
        ],


        randomWord: () => {
            //create random number between 0 and 3
            //Math.floor(Math.random() * 3)
        }
    }

    console.log(game.guessWords[1])
})