//localStorage.clear()
let list = []

$(document).ready(function(){

  $('#addButton').on('click', function(){

    //console.log('button works')
     let item = $('#newItem').val()
     list.push(item)
    // console.log(list)

     $('#newItem').val('')

     displayList()
  })
})

//create a function to loop through list and print to page
function displayList(){
  //each time button is clicked we remove the div content
  $('#listItems').empty()

  for(let i = 0; i < list.length; i++){
    let d = $('<div class="listItem" data='+ i +'>')
    //create an x on the right side of the list item
    let x = $('<button type="button" class="exButton">')
    x.html('X')
    d.html(list[i])
    d.append(x)
    //console.log(d)
    $('#listItems').append(d)
  }
}
