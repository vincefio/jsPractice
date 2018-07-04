var inquirer = require('inquirer')
var Band = require('./band')
var Member = require('./member')

inquirer.prompt([
  {
    type: 'confirm',
    name: 'startBandConfirm',
    message: 'Do you want to start a band?'
  }
]).then(answers => {
    //console.log('answers ' + JSON.stringify(answers.startBandConfirm))
    if(answers.startBandConfirm){
      console.log('lets start a fucking band!')
      game()
    }
})



function game(){
  inquirer.prompt([
    {
      type: 'input',
      name: 'bandName',
      message: 'What is the band name?'
    },
    {
      type: 'input',
      name: 'numBandMembers',
      message: 'How many members are in the band?'
    },
    {
      type: 'input',
      name: 'bandGenre',
      message: 'What is your genre of music?'
    }
  ]).then(answers => {
    console.log(JSON.stringify(answers))
    //create a new Band object with the answers
    var newBand = new Band(answers.bandName, answers.numBandMembers, answers.bandGenre)
    console.log('new band added ' + JSON.stringify(newBand))
  })
  console.log('test')
}
