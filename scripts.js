document.getElementById("button").addEventListener("click", function() {
  var nextToDo = document.getElementById("todo").value;
    $('ul').append(`<li>${nextToDo}</li>`);
     });

