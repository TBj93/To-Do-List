
function newItem() {
    let str =$('#input').val();
let list = $('#list');
let li = $('<li></li>');
list.append(li);
li.append(str);

$('li').dblclick(function() {
    li.addClass("strike");
    });

}




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