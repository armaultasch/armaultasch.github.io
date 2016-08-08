$(document).ready(function () {

  $(".js-character-form").on("submit", createCharacter);

  $(".js-fetch-characters").on("click", fetchCharacters);

});



function createCharacter (event) {
  event.preventDefault();

  var newName = $(".js-name-input").val();
  var newOccupation = $(".js-occupation-input").val();
  var newWeapon = $(".js-weapon-input").val();

  var newCharacter = {
    name: newName,
    occupation: newOccupation,
    weapon: newWeapon
  };

  // POST  https://ironhack-characters.herokuapp.com/characters
  $.ajax({
    type: "POST",
    url: "https://ironhack-characters.herokuapp.com/characters",
    data: newCharacter,
    success: showNewCharacter,
    error: handleError
  });
}

function showNewCharacter () {
  var newName = $(".js-name-input").val();
  var newOccupation = $(".js-occupation-input").val();
  var newWeapon = $(".js-weapon-input").val();

  var listContent = `
    <li>
      <h3> ${newName} </h3>
      <ul>
        <li> Occupation: ${newOccupation} </li>
        <li> Weapon: ${newWeapon} </li>
      </ul>
    </li>
  `;

  $(".js-characters-list").append(listContent);
}



function fetchCharacters () {
  $.ajax({
    type: "GET",
    url: "https://ironhack-characters.herokuapp.com/characters",
    success: showCharacters,
    error: handleError
  });
}


function showCharacters (response) {
  var charactersArray = response;

  $(".js-characters-list").empty();

  charactersArray.forEach(function (theCharacter) {
    var listContent = `
      <li>
        <h3> ${theCharacter.name} </h3>
        <ul>
          <li> Occupation: ${theCharacter.occupation} </li>
          <li> Weapon: ${theCharacter.weapon} </li>
        </ul>
      </li>
    `;

    $(".js-characters-list").append(listContent);
  });
}

function handleError (error) {
  console.log("Oh no! There was an error.");
  console.log(error.responseText);
}
