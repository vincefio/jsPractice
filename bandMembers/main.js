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
function loop() {
if (page <= last_page) {
    request("/data?page=" + page, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            store_data(body)
        }
        page++;
        loop();
    });
}
};
//next we need to loop through answers.numBandMembers and create them with inquirer
//let bandMemberCount = 4
function createMembers(){

  //if(bandMemberCount > 0){
    inquirer.prompt([
      {
        type: 'input',
        name: 'memberName',
        message: 'ENTER BAND MEMBER NAME:'
      }
    ]).then(answers => {
      console.log(answers)
    })
//}
}

function game(){
  inquirer.prompt([
    {
      type: 'input',
      name: 'bandName',
      message: 'What is the band name?'
    },
    /*{
      type: 'input',
      name: 'numBandMembers',
      message: 'How many members are in the band?'
    },*/
    {
      type: 'input',
      name: 'bandGenre',
      message: 'What is your genre of music?'
    }
  ]).then(answers => {
    //console.log(JSON.stringify(answers))
    //create a new Band object with the answers
    var newBand = new Band(answers.bandName, answers.bandGenre)
    console.log('Your band ' + answers.bandName.toUpperCase() + ' has been created')
    //let bandMemberCount = answers.numBandMembers

    //this should be a recursive function
    createMembers()

  })
}
