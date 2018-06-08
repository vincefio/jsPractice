//localStorage.clear()
let list = []
let dataNum

$(document).ready(function(){

  $('#addButton').on('click', function(){

    //console.log('button works')
     let item = $('#newItem').val()
     list.push(item)
    // console.log(list)

     $('#newItem').val('')

      $('#newItem').focus()

     displayList()
  })

  //make click event for the x'switch
  $(document).on('click', ".exButton", function(){
    //console.log($(this).parent().attr('data-item'))
    dataNum = $(this).attr('data-button')
    console.log(dataNum)
    list.splice(dataNum, 1)
    console.log(list)
    displayList()

  })
})

//create a function to loop through list and print to page
function displayList(){
  //each time button is clicked we remove the div content
  $('#listItems').empty()

  for(let i = 0; i < list.length; i++){
    let d = $('<div class="listItem" data-item='+ i +'>')
    //create an x on the right side of the list item
    let x = $('<button type="button" class="exButton" data-button='+ i +'>')
    x.html('X')
    d.html(list[i])
    d.append(x)
    //console.log(d)
    $('#listItems').append(d)
  }
}
