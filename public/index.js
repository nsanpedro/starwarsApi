$(document).ready(function() {
  $(".getCharacters").click(function() {

    $.get("/characters", function(data) {
      data = JSON.parse(data);
      data.results.forEach(function(character, index) {
        var listItem = $('<li></li>');
        var info = "" +
          "name: " + character.name +
          "height: " + character.height +
          "mass: " + character.mass +
          "hair color: " + character.hair_color +
          "skin color: " + character.skin_color +
          "eye color: " + character.eye_color +
          "birth year: " + character.birth_year +
          "gender: " + character.gender;
        listItem.text(info);

        listItem.addClass('collection-item');

        $(".character-list").empty();
        $(".character-list").append(listItem);
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
