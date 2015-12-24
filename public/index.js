$(document).ready(function() {
  $(".getCharacters").click(function() {


    $.get("/characters", function(data) {
      console.dir(data);
      
      $(".character-list").empty();
      data.forEach(function(character, index) {
        var listItem = $('<li></li>');
        var btnEliminar = '<button class="eliminar" id="'+character._id+'">Eliminar</button>';
        

        listItem.text(character.name);
        listItem.append(btnEliminar);
        listItem.addClass('collection-item');

        
        $(".character-list").append(listItem);
      });
      $(".eliminar").click(function() {
        var idEliminar = $(this.id);
    console.log("apreta boton eliminar" );
  });
    });

  });
  

});


//GET
// $.get("test.php",function(data){
//   alert("Data: " + data);
// });

//POST
// $.get("test.php", {},function(data){
//   alert("Data: " + data);
// });

//JSON
//$(selector).getJSON("test.php",{},function(data){
//   alert("Data: " + data);
// })
