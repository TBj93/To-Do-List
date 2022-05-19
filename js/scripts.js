

function newItem() {
  let str =$('input').val();
  // get input from button
  let li = $('<li></li>');
  li.append(str);
// create list element and add button input value into it

  let list = $('#list');
  list.append(li);
// insert created li element into list


function strikeOut() {
  li.toggleClass("strike");
}
//strike out db clicked note
li.on("dblclick",strikeOut);


//delete function for notes
function removeLi() {
  li.addClass("delete");
}

//add x button to remove
let xbtn = $('<button>X</button>');
li.append(xbtn);
//remove button on click
xbtn.on("click",removeLi);

$( "#list" ).sortable();
// use jquery function to make li element draggable and sortable
}

/*
$('li').append(
  $(document.createElement('button')).prop({
      type: 'button',
      innerHTML: 'X',
  click: removeLi(), 
})
);
*/





/*
function strike() {
  li.addClass("strike");
}
$('li').dbclick(strike());
*/

/*

$('#list').dblclick(function() {
    
  li.addClass('strike');
  });


/*

$('li').dblclick(function() {
    
    li.toggleClass("strike");
    });
// strike nur wenn nicht highlighted oder so
// css("li:hover").
// $('li:not(.highlighted oder so')
}



$( function() {
    $( "#list" ).sortable();
  } );


/*

$('#list').append(<li>dsgsdfg</li>);
'+str+'\r\n'+'

let str =$('#input').val();

li.on("click", function() {
    li.addClass("strike")
});

/*

$('li').dblclick(function() {
li.addClass("strike");
});

/*
$("#list" ).dblclick(function() {
    alert( "Handler for .dblclick() called." );
  });
*/