var inquirer = require('inquirer')
var Band = require('./band')
var Member = require('./member')

//create an array for bandMembers
let memberArr = []

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

//next we need to loop through answers.numBandMembers and create them with inquirer
function createMembers(numBandMembers){
  //console.log('nummembers ' + numBandMembers)
  //numBandMembers = parseInt(numBandMembers)
  //console.log(typeof numBandMembers)

  if(numBandMembers > 0){
    inquirer.prompt([
      {
        type: 'input',
        name: 'memberName',
        message: 'ENTER BAND MEMBER NAME:'
      },
      {
        type: 'checkbox',
        name: 'memberInstruments',
        default: 'looks cool',
        choices: ['vocals', 'guitar', 'bass', 'drums'],
        message: 'WHAT INSTRUMENTS DOES THE MEMBER PLAY?:'
      },
      {
        type: 'confirm',
        name: 'memberCool',
        message: 'IS THE MEMBER COOL?:'
      },

    ]).then(answers => {
      var nextMember = new Member(answers.memberName, answers.memberInstruments, answers.memberCool)
      memberArr.push(nextMember)
      console.log('MEMBER ADDED')
      //create a new member object
      numBandMembers --
      //console.log(answers)
      createMembers(numBandMembers)
    })
//}
  }
  else{
    console.log('ON TO THE NEXT STEP')
    console.log(memberArr)
  }
}

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
    //console.log(JSON.stringify(answers))
    //create a new Band object with the answers
    var newBand = new Band(answers.bandName, answers.numBandMembers, answers.bandGenre)
    console.log('Your band ' + answers.bandName.toUpperCase() + ' has been created')
    //let bandMemberCount = answers.numBandMembers

    //this should be a recursive function
    createMembers(parseInt(answers.numBandMembers))
    //createPlayer()
  })
}
