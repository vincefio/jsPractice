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
  console.log('answers ' + JSON.stringify(answers.startBandConfirm))
})



function initialPrompt(){
//  let answers

  //console.log('answers ' + ansers)
}
